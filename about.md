---
layout: page
title: About
permalink: /about/
eyebrow: About
heading: an engineer and designer -
heading_muted: i think
intro: maybe i should have done product design
---

<div class="about-grid">
  <div class="prose">
    <p>I'm an electronics engineer who likes owning things end to end, and bringing people along with me. I graduated with a First Class MEng in Electronic and Electrical Engineering from Brunel, picked up the IET Prize for the highest average grade on an IET-accredited course, and spent my final year as the <em>only</em> electrical engineer on Brunel Racing's Formula Student car. Before that came a year designing hardware at BAE Systems and a summer of telecoms design at Dar.</p>
    <p>My favourite kind of problem is a complicated one that can be made simple, ideally while also making it look good and easy to use. That's how the design side snuck in. I started making posters for a student society, kept getting better (and a little obsessed), and ended up co-authoring the society's brand redesign. It turns out a well-laid-out PCB and a well-set poster want the same things: clear hierarchy, good spacing, and nothing that doesn't need to be there.</p>
    <p>When I'm not doing either, I'm usually volunteering, tinkering, or both: running an RC race day for 100+ Scouts, keeping 22 containers alive on my homelab, or helping new students find their feet as an ambassador. I like being part of things with a bigger purpose, and I'm happiest on mixed teams building products that actually make a difference.</p>
  </div>
</div>

<section class="section">
  <div class="split-cols">
    <div class="card split-col" data-accent="eng">
      <p class="eyebrow">Engineering</p>
      <h2 class="heading-sm">Skills &amp; tools</h2>
      <ul class="badge-row">
        <li class="badge">PCB Design</li><li class="badge"> Analog & Digital Design</li><li class="badge">MATLAB</li>
        <li class="badge">CAD</li><li class="badge">Python</li><li class="badge">Docker</li>
        <li class="badge">Git</li>
      </ul>
    </div>
    <div class="card split-col" data-accent="design">
      <p class="eyebrow">Design</p>
      <h2 class="heading-sm">Skills &amp; tools</h2>
      <ul class="badge-row">
        <li class="badge">Affinity</li><li class="badge">Photoshop</li><li class="badge">Figma</li>
        <li class="badge">Poster Design</li><li class="badge">Typography</li><li class="badge">Branding</li>
        
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <p class="eyebrow eyebrow-plain">Experience</p>
  <ol class="timeline">
    <li class="reveal"><span class="mono-meta">2025 — 2026</span><div><h3>Lead Electrical Engineer, Formula Student UK</h3><p class="muted">Brunel Racing · Sole electrical engineer, designing 6 HV and LV boards for the team's first FSUK-compliant electrical system.</p></div></li>
    <li class="reveal"><span class="mono-meta">2024 — 2026</span><div><h3>Student &amp; Residence Ambassador</h3><p class="muted">Brunel University of London · Campus tours, weekly wellbeing check-ins for 200+ residents, and outreach to 1,200+ students.</p></div></li>
    <li class="reveal"><span class="mono-meta">2026</span><div><h3>MEng Electronic and Electrical Engineering</h3><p class="muted">Brunel University of London · First Class Honours and the IET Prize for the highest average grade.</p></div></li>
    <li class="reveal"><span class="mono-meta">2024</span><div><h3>Telecommunications Intern</h3><p class="muted">Dar (Sidara Group) · Designed a school's low-current systems in Revit and AutoCAD to TIA, NFPA and BICSI standards.</p></div></li>
    <li class="reveal"><span class="mono-meta">2023 — 2024</span><div><h3>Hardware Engineer, Industrial Placement</h3><p class="muted">BAE Systems · Redesigned an analog product's PCBs and built an assessment board now used to onboard new engineers.</p></div></li>
    <li class="reveal"><span class="mono-meta">2021</span><div><h3>A-Level Mathematics Lead Teaching Assistant</h3><p class="muted">Led a team of 12 teaching assistants and automated parent reporting for 200+ students.</p></div></li>
  </ol>
</section>

<section class="section">
  <div class="card about-teaser">
    <p class="eyebrow">Contact.</p>
    <p class="display display-sm">let's make something. <span class="display-muted">Engineering roles, design commissions, or just a hello.</span></p>
    <div class="btn-row">
      <a class="btn btn-primary" href="mailto:{{ site.author.email }}">Email me</a>
      {% for link in site.social %}<a class="btn btn-ghost" href="{{ link.url }}" target="_blank" rel="noopener">{{ link.name }}</a>{% endfor %}
    </div>
  </div>
</section>
