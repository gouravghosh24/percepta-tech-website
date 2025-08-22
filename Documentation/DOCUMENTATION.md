# Percepta Tech Website Documentation

## 1. Project Overview

*   **Project Name:** Percepta Tech
*   **Technology Stack:** Next.js (a React framework)
*   **Styling:** CSS Modules (scoping styles to individual components)
*   **Core Concept:** A modern, professional, and responsive business website for a web development and SEO company. It serves as a lead-generation tool by showcasing services, proving expertise, and building client trust.

---

## 2. Live Site Map & User Flow

This shows the pages that a user can visit and how they are connected.

*   **`/` (Homepage)**
    *   The main landing page for the website.
    *   Contains multiple sections to guide the user through the company's value proposition.
    *   **Navigation Links To:**
        *   `/#services` (Scrolls down to the Services section)
        *   `/#work` (Scrolls down to the Portfolio section)
        *   `/about` (Navigates to the dedicated About page)
        *   `/blog` (Navigates to the Blog page)
        *   `/contact` (Future link to the Contact page)

*   **`/about` (About Us Page)**
    *   A dedicated page providing more detail about the company's mission and vision.
    *   Reuses the "About Us" section from the homepage for consistency.

*   **`/portfolio/zenithvistaestates` (Case Study Page)**
    *   A detailed page showcasing a specific project. This is a dynamic template.
    *   Accessed by clicking a project card in the Portfolio section on the homepage.
    *   **Future pages will follow this structure:** `/portfolio/[project-name]`

*   **`/services/website-development` (Service Detail Page)**
    *   A dedicated page explaining a specific service in detail.
    *   **Future pages will follow this structure:** `/services/[service-name]`

*   **`/blog` (Blog / Insights Page)**
    *   A page listing all articles and insights.
    *   Currently contains placeholder posts.

*   **`/blog/[slug]` (Single Blog Post Page)**
    *   A dynamic page template for displaying a single, full-length blog post.
    *   Accessed by clicking a post on the main Blog page.

---

## 3. Developer Folder Structure (Where to Find Everything)

This is the technical map of your project. It explains the purpose of each key folder and file.

percepta-tech-website/
│
├── 📁 app/ (The heart of your website's pages and routes)
│ │
│ ├── 📄 layout.js (The MAIN template for your entire site. The Navbar and Footer should be here.)
│ │
│ ├── 📄 page.js (The content for your HOMEPAGE. All sections are assembled here.)
│ │
│ ├── 📁 about/
│ │ └── 📄 page.js (The dedicated "About Us" page content)
│ │
│ ├── 📁 blog/
│ │ ├── 📄 page.js (The page that lists all your blog posts)
│ │ └── 📁 [slug]/
│ │ └── 📄 page.js (The template for a SINGLE blog post)
│ │
│ ├── 📁 portfolio/
│ │ └── 📁 zenithvistaestates/
│ │ └── 📄 page.js (The case study page for this specific project)
│ │
│ └── 📁 services/
│ └── 📁 website-development/
│ └── 📄 page.js (The detailed page for this specific service)
│
├── 📁 components/ (Reusable building blocks for your site)
│ │
│ ├── 📄 AboutSection.js
│ ├── 📄 Footer.js
│ ├── 📄 HeroSection.js
│ ├── 📄 Navbar.js
│ ├── 📄 PortfolioSection.js
│ ├── 📄 ProcessSection.js
│ ├── 📄 Testimonials.js
│ └── 📄 WhyChooseUs.js
│
├── 📁 public/ (Storage for all static assets)
│ │
│ ├── 📄 about-us-video.mp4 (The video for the About section)
│ ├── 📄 placeholder-project-1.jpg (Images for the portfolio)
│ ├── ... (and other images, future fonts, or PDFs)
│
├── 📁 styles/ (Where all your CSS stylesheets live)
│ │
│ ├── 📄 globals.css (Sitewide styles like fonts, colors, and background)
│ ├── 📄 AboutSection.module.css
│ ├── 📄 CaseStudy.module.css
│ ├── 📄 Footer.module.css
│ ├── 📄 Home.module.css (Styles specifically for the homepage layout)
│ ├── ... (and all other .module.css files for your components)
│
├── 📄 package.json (The project's "instruction manual." Lists all dependencies.)
│
└── (Other configuration files like next.config.mjs, .gitignore, etc.)
code


---

## 4. How to Update or Add Content

*   **To change text on the homepage:** Edit the relevant component in the `components/` folder (e.g., `HeroSection.js`) or the data arrays inside `app/page.js`.
*   **To add a new portfolio project:**
    1.  Add the new project's data to the array in `components/PortfolioSection.js`.
    2.  Add the project's image to the `public/` folder.
    3.  Create a new folder and `page.js` file for the case study inside `app/portfolio/`.
*   **To add a new blog post:**
    1.  Add the post's data to the array in `app/blog/page.js`.
    2.  Create a new folder and `page.js` file inside `app/blog/` to write the full article.
*   **To change the look of a section:** Edit the corresponding `.module.css` file in the `styles/` folder.
*   **To change the Navbar or Footer:** Edit the files in the `components/` folder. Since they are in `app/layout.js`, they will update on every page.