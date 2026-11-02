(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  /* ---------- Theme toggle ---------- */
  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store("theme", next);
    });
  });

  /* ---------- Mobile menu ---------- */
  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  if (header && navToggle) {
    var setOpen = function (open) {
      header.classList.toggle("nav-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
    };
    navToggle.addEventListener("click", function () {
      setOpen(!header.classList.contains("nav-open"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
    document.addEventListener("click", function (e) {
      if (!header.contains(e.target)) setOpen(false);
    });
  }

  /* ---------- Home hero: shift the stage light toward the side you point at ---------- */
  document.querySelectorAll(".hero-half").forEach(function (half) {
    var cls = "focus-" + half.getAttribute("data-side");
    var on = function () { document.body.classList.add(cls); };
    var off = function () { document.body.classList.remove(cls); };
    half.addEventListener("mouseenter", on);
    half.addEventListener("mouseleave", off);
    half.addEventListener("focus", on);
    half.addEventListener("blur", off);
  });

  /* ---------- Galleries: rank-ordered shuffle, tightly packed columns that scroll at different rates ---------- */
  function shuffle(list) {
    for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = list[i]; list[i] = list[j]; list[j] = t;
    }
    return list;
  }
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.querySelectorAll("[data-shuffle]").forEach(function (grid) {
    var byRank = {};
    grid.querySelectorAll("[data-rank]").forEach(function (t) {
      var r = Math.min(Math.max(parseInt(t.getAttribute("data-rank"), 10) || 3, 1), 5);
      (byRank[r] = byRank[r] || []).push(t);
    });
    var tiles = [], heights = []; // heights in units of column width
    [5, 4, 3, 2, 1].forEach(function (r) {
      shuffle(byRank[r] || []).forEach(function (t) {
        var img = t.querySelector("img");
        t.setAttribute("data-i", tiles.length);
        tiles.push(t);
        heights.push(img.naturalWidth ? img.naturalHeight / img.naturalWidth : 1.25); // not loaded yet: assume 4:5
      });
    });

    var box = grid.hasAttribute("data-box"); // home: a fixed window the columns slide through
    var cols = [], speeds = [];
    var columnCount = function () {
      var w = window.innerWidth;
      return w >= 1100 && !box ? 4 : w >= 700 ? 3 : 2;
    };
    var layout = function () {
      var n = columnCount();
      cols.forEach(function (c) { c.remove(); });
      cols = [];
      // unequal fill heights and per-column speeds (all >= 1, so every tile still comes into view) set the rates apart
      var weights = shuffle([1, 0.74, 0.9, 0.82].slice(0, n));
      speeds = shuffle([1, 1.3, 1.6, 1.15].slice(0, n));
      var filled = weights.map(function () { return 0; });
      while (cols.length < n) {
        var c = document.createElement("div");
        c.className = "masonry-col";
        grid.appendChild(c);
        cols.push(c);
      }
      tiles.forEach(function (t, i) {
        if (t.classList.contains("is-hidden")) return cols[n - 1].appendChild(t); // filtered out: park it
        var best = 0;
        for (var k = 1; k < n; k++) if (filled[k] / weights[k] < filled[best] / weights[best]) best = k;
        filled[best] += heights[i];
        cols[best].appendChild(t);
      });
      drift();
    };
    // each column slides from top-aligned to bottom-aligned with the window; faster ones get there first, then hold
    var drift = function () {
      if (reduceMotion.matches) return;
      var r = grid.getBoundingClientRect(), vh = window.innerHeight;
      var colH = cols.map(function (c) { return c.offsetHeight; });
      var win = box ? grid.clientHeight : Math.max.apply(null, colH);
      var p = box
        ? (vh - win / 2 - r.top) / Math.max(vh, 1)       // hold until half the box is on screen, finish as half has left
        : (vh / 2 - r.top) / Math.max(win - vh / 2, 1);  // from mid-screen until the gallery's end reaches the bottom
      p = Math.min(Math.max(p, 0), 1);
      cols.forEach(function (c, i) {
        c.style.transform = "translateY(" + ((win - colH[i]) * Math.min(p * speeds[i], 1)).toFixed(1) + "px)";
      });
    };
    var queued = false;
    var onScroll = function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; drift(); });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", function () {
      if (cols.length !== columnCount()) layout(); else onScroll();
    });
    grid.addEventListener("filtered", layout);
    grid.classList.add("is-columns");
    layout();
  });

  /* ---------- Filters (engineering tags, design categories) ---------- */
  document.querySelectorAll("[data-filter-target]").forEach(function (bar) {
    var target = document.querySelector(bar.getAttribute("data-filter-target"));
    if (!target) return;
    var buttons = bar.querySelectorAll("[data-filter]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var value = btn.getAttribute("data-filter");
        buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        target.querySelectorAll("[data-tags]").forEach(function (item) {
          var tags = (item.getAttribute("data-tags") || "").split(",");
          var show = value === "all" || tags.indexOf(value) !== -1;
          item.classList.toggle("is-hidden", !show);
          if (show) item.classList.add("is-visible");
        });
        target.dispatchEvent(new Event("filtered"));
      });
    });
  });

  /* ---------- Lightbox ---------- */
  var box = document.querySelector(".lightbox");
  if (box && typeof box.showModal === "function") {
    var img = box.querySelector(".lightbox-img");
    var title = box.querySelector(".lightbox-title");
    var meta = box.querySelector(".lightbox-meta");
    var items = [];
    var index = 0;

    // shown pieces in gallery order (columns change DOM order, so sort by the shuffle index)
    var visibleItems = function () {
      var order = function (el) { return +(el.closest("[data-i]") || el).getAttribute("data-i") || 0; };
      return Array.prototype.filter.call(
        document.querySelectorAll("[data-lightbox] .art-open"),
        function (el) { return el.offsetParent !== null; }
      ).sort(function (a, b) { return order(a) - order(b); });
    };
    var show = function (i) {
      index = (i + items.length) % items.length;
      var el = items[index];
      img.src = el.getAttribute("data-src");
      img.alt = el.getAttribute("data-title");
      title.textContent = el.getAttribute("data-title");
      meta.textContent = el.getAttribute("data-meta");
    };

    document.querySelectorAll("[data-lightbox] .art-open").forEach(function (el) {
      el.addEventListener("click", function () {
        items = visibleItems();
        show(items.indexOf(el));
        box.showModal();
      });
    });

    box.querySelector(".lightbox-close").addEventListener("click", function () { box.close(); });
    box.querySelector(".lightbox-prev").addEventListener("click", function () { show(index - 1); });
    box.querySelector(".lightbox-next").addEventListener("click", function () { show(index + 1); });
    box.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });
    // click on the dark area (not the image or buttons) closes it
    box.addEventListener("click", function (e) {
      if (e.target === box || e.target.classList.contains("lightbox-figure")) box.close();
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
