# omaraltahawi.github.io

Personal portfolio: **Engineering** projects, **Design** (graphics & illustration), a **Blog** and an **About** page.

Live at **https://omaraltahawi.github.io**

The site is built with [Jekyll](https://jekyllrb.com/), which GitHub Pages runs for you automatically.
You never need to touch HTML to add content — you add small text files, and about a minute after
you commit, the live site updates.

---

## Where things live

| What you want to change            | File / folder                     |
|------------------------------------|-----------------------------------|
| Name, email, social links, nav     | `_config.yml`                     |
| Engineering projects               | `_projects/` (one `.md` file each) |
| Project images                     | `assets/images/projects/`         |
| Design gallery list                | `_data/artwork.yml`               |
| Artwork images                     | `assets/images/artwork/`          |
| Blog posts                         | `_posts/` (one `.md` file each)   |
| Blog images                        | `assets/images/blog/`             |
| About page                         | `about.md`                        |
| Portrait on About page             | `assets/images/portrait.svg` (replace, then update the path in `about.md`) |
| Colours, fonts, spacing            | `assets/css/main.css` (top of file) |

All of these can be edited directly on github.com: open the file, click the ✏️ pencil icon,
make your change, then click **Commit changes**.

---

## Add artwork to the Design gallery

1. Go to the `assets/images/artwork` folder on GitHub → **Add file → Upload files**.
   Drag in your image (JPG, PNG, WEBP or SVG; ideally under 1 MB, no spaces in the name,
   e.g. `city-poster.jpg`). Click **Commit changes**.
2. Open `_data/artwork.yml`, click ✏️, and add a block like this (the order in the file is the
   order on the page):

   ```yaml
   - file: city-poster.jpg
     title: City Poster
     year: 2026
     medium: Illustrator
     category: Poster
     featured: true
   ```

   - `category` creates the filter buttons automatically (Poster, Illustration, Branding…).
   - `featured: true` also shows it on the home page (the first 6 featured pieces appear there).
   - Indentation matters in this file: keep two spaces before each line after `- file:`.
3. Commit. Done.

To remove a placeholder, delete its block from `artwork.yml` (and the image file if you like).

---

## Add an engineering project

1. In `_projects/`, click **Add file → Create new file**. Name it something like
   `my-new-project.md` (this becomes the page address: `/engineering/my-new-project/`).
2. Paste this and fill it in:

   ```markdown
   ---
   title: My New Project
   summary: One sentence that explains what it is.
   year: 2026
   role: What you did, e.g. "Mechanical design lead"
   tags: [CAD, Python]
   cover: /assets/images/projects/my-new-project.jpg
   featured: true
   links:
     - name: Source code
       url: https://github.com/omaraltahawi/...
   ---

   ## The problem
   ...

   ## Approach
   ...

   ## Result
   ...
   ```

3. Upload the cover image to `assets/images/projects/`.
4. Projects are ordered newest year first. `featured: true` puts it on the home page (up to 3).

---

## Write a blog post

1. In `_posts/`, create a file named **`YEAR-MONTH-DAY-title.md`**, e.g.
   `2026-11-15-my-first-real-post.md`. The date in the name is the post date.
2. Start it with:

   ```markdown
   ---
   title: My first real post
   description: One-line summary shown in the post list.
   tags: [Design]
   ---

   Your writing here. Use **bold**, *italic*, [links](https://example.com),
   ## headings, - bullet lists, and images:

   ![What the image shows](/assets/images/blog/my-image.jpg)
   ```

3. Commit. Posts with a date in the future won't appear until that day.

The three example posts can be deleted whenever you're ready.

---

## Edit the About page

Open `about.md`. The text at the top between the `---` lines sets the headline and intro.
Below that, replace the placeholder paragraphs, skills (each `<li class="badge">…</li>`)
and the experience timeline.

---

## How the design works

- **One typeface** (TASA Orbiter, falling back to Inter), three weights.
- **Two accents with meaning:** teal = engineering, coral = design. The glow at the top of each
  page, the labels and the filter buttons follow the section you're in.
- Home page: point at "Engineer" or "designer" and the stage light shifts to that side.
- Dark theme by default with a light theme; the ◐ button in the nav switches, and the choice is remembered.

---

## Preview locally (optional)

Only needed if you want to see changes before publishing. Requires Ruby.

```bash
bundle install
```

```bash
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Publishing

GitHub Pages builds the site from the `main` branch. In the repo go to
**Settings → Pages** and check that *Source* is **Deploy from a branch**, branch **main**, folder **/ (root)**.
Progress of each build is visible in the **Actions** tab.
