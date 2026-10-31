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

  /* ---------- Filters (engineering tags, design categories) ---------- */
  document.querySelectorAll("[data-filter-target]").forEach(function (bar) {
    var target = document.querySelector(bar.getAttribute("data-filter-target"));
    if (!target) return;
    var buttons = bar.querySelectorAll("[data-filter]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var value = btn.getAttribute("data-filter");
        buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        Array.prototype.forEach.call(target.children, function (item) {
          var tags = (item.getAttribute("data-tags") || "").split(",");
          var show = value === "all" || tags.indexOf(value) !== -1;
          item.classList.toggle("is-hidden", !show);
          if (show) item.classList.add("is-visible");
        });
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

    var visibleItems = function () {
      return Array.prototype.filter.call(
        document.querySelectorAll("[data-lightbox] .art-open"),
        function (el) { return !el.closest(".is-hidden"); }
      );
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
