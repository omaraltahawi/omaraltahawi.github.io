---
layout: page
title: About
permalink: /about/
eyebrow: About
heading: An engineer who never stopped drawing.
heading_muted: Two practices, one way of seeing.
intro: Placeholder bio — replace this with a sentence or two about who you are and what you care about.
---

<div class="about-grid">
  <div class="prose">
    <p>Write a few paragraphs about yourself here. Where you studied, what kind of engineering you do, and how graphic design became part of your life.</p>
    <p>A good About page is honest and specific. Mention the problems you like solving, the tools you reach for, and what you're looking for next — a job, collaborations, freelance design work, or just good conversations.</p>
    <p>Keep it short. People skim. Two or three paragraphs is plenty.</p>
  </div>
  <aside class="card about-portrait">
    <img src="{{ '/assets/images/portrait.svg' | relative_url }}" alt="Portrait placeholder">
    <p class="mono-meta"><span>Based in</span><span>{{ site.author.location }}</span></p>
  </aside>
</div>

<section class="section">
  <div class="split-cols">
    <div class="card split-col" data-accent="teal">
      <p class="eyebrow">Engineering</p>
      <h2 class="heading-sm">Skills &amp; tools</h2>
      <ul class="badge-row">
        <li class="badge">Python</li><li class="badge">C / C++</li><li class="badge">MATLAB</li>
        <li class="badge">CAD</li><li class="badge">Embedded systems</li><li class="badge">Data analysis</li>
        <li class="badge">Git</li>
      </ul>
    </div>
    <div class="card split-col" data-accent="coral">
      <p class="eyebrow">Design</p>
      <h2 class="heading-sm">Skills &amp; tools</h2>
      <ul class="badge-row">
        <li class="badge">Illustrator</li><li class="badge">Photoshop</li><li class="badge">Figma</li>
        <li class="badge">Procreate</li><li class="badge">Typography</li><li class="badge">Branding</li>
        <li class="badge">Poster design</li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <p class="eyebrow eyebrow-plain">Experience</p>
  <ol class="timeline">
    <li class="reveal"><span class="mono-meta">2024 — Now</span><div><h3>Job title</h3><p class="muted">Company name · One line about what you do there.</p></div></li>
    <li class="reveal"><span class="mono-meta">2022 — 2024</span><div><h3>Previous role</h3><p class="muted">Company name · One line about what you did there.</p></div></li>
    <li class="reveal"><span class="mono-meta">2018 — 2022</span><div><h3>Degree, e.g. BEng Mechanical Engineering</h3><p class="muted">University name</p></div></li>
  </ol>
</section>

<section class="section">
  <div class="card about-teaser">
    <p class="eyebrow">Contact</p>
    <p class="display display-sm">Let's make something. <span class="display-muted">Engineering roles, design commissions, or just a hello.</span></p>
    <div class="btn-row">
      <a class="btn btn-primary" href="mailto:{{ site.author.email }}">Email me</a>
      {% for link in site.social %}<a class="btn btn-ghost" href="{{ link.url }}" target="_blank" rel="noopener">{{ link.name }}</a>{% endfor %}
    </div>
  </div>
</section>
