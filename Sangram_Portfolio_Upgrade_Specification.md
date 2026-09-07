# Portfolio Website Upgrade Specification

## Project
**Sangram Adhikary Portfolio**

## Objective

Upgrade the existing portfolio without completely changing its core identity or design. The new version should position Sangram as an:

> **AI Engineer & AI Product Builder**

The portfolio should communicate that the owner can research, design, build, and deploy practical AI-powered products.

The design should remain modern, clean, professional, and personal. Avoid making it look like a generic corporate website or a template.

---

# 1. Primary Portfolio Positioning

## Recommended Hero Identity

### Main Title

# AI Engineer & AI Product Builder

### Supporting Description

Building intelligent, human-centered products with Generative AI, Machine Learning, NLP, and modern full-stack technologies.

### Optional Secondary Line

From AI models to deployed products — combining AI engineering with a strong design background to build experiences people can actually use.

---

# 2. Hero Section Changes

Keep the existing visual style, but improve the messaging and calls to action.

## Recommended CTA Buttons

### Primary Button

**Explore My Work**

Scrolls to the Featured Projects section.

### Secondary Button

**Download Resume**

Downloads or opens the latest resume PDF.

### Optional Small Links

- GitHub
- LinkedIn
- Email

## Recommended Hero Stats

Use subtle statistics only if they fit the current design:

- 3 AI Products
- 2 Live Platforms
- 7+ Years Design Experience
- B.Tech AI & ML

Do not overcrowd the hero section.


---

# 2A. RESUME ACCESS & DOWNLOAD SYSTEM

The resume should be easily accessible throughout the portfolio. Recruiters should never need to search for it.

## Recommended Resume CTA

Use one consistent label across the website:

**Download Resume**

Optional compact navigation label:

**Resume ↓**

## Placement 1 — Hero Section

Add the resume button next to the main project CTA:

```text
[ Explore My Work ]   [ Download Resume ↓ ]
```

Recommended hierarchy:

- Explore My Work = primary CTA
- Download Resume = secondary CTA

Both should remain clearly visible without scrolling.

## Placement 2 — Navigation Bar

Add a compact resume button on the right side of the navigation:

```text
Home   About   Projects   Experience   Design   Contact   [ Resume ↓ ]
```

Make it visually distinct but consistent with the existing design system.

## Placement 3 — Contact Section

Add the resume button again at the end of the portfolio:

```text
[ Email Me ] [ LinkedIn ] [ Download Resume ↓ ]
```

This gives recruiters another opportunity to access the resume after reviewing the portfolio.

## Recommended Resume Behavior

The resume should:

- Be available as a PDF
- Open in a new browser tab for quick preview
- Allow the user to download the PDF
- Use a professional filename
- Work correctly on desktop and mobile

Recommended filename:

```text
Sangram-Adhikary-AI-Engineer-Resume.pdf
```

## Recommended File Location

For a Next.js/React portfolio:

```text
/public
   /resume
      Sangram-Adhikary-AI-Engineer-Resume.pdf
```

Public URL:

```text
/resume/Sangram-Adhikary-AI-Engineer-Resume.pdf
```

## Recommended Implementation

Use the same URL everywhere on the website so the resume can be updated later without changing multiple links.

Example behavior:

```jsx
<a
  href="/resume/Sangram-Adhikary-AI-Engineer-Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Download Resume
</a>
```

## Important Maintenance Rule

Whenever the resume is updated:

1. Replace the old PDF.
2. Keep the same filename.
3. Keep the same URL.
4. Verify the download/view button works on mobile and desktop.

This ensures existing links remain valid.

## Optional Resume Preview

A dedicated resume preview page or modal is optional but not required.

Do not overcomplicate the portfolio initially.

Preferred user experience:

```text
Click Download Resume
        ↓
Resume PDF opens in a new tab
        ↓
Recruiter can preview or download
```

## Final Resume Placement Summary

The final portfolio should include resume access in exactly these key locations:

- Hero Section — Download Resume
- Navigation Bar — Resume
- Contact Section — Download Resume

This should be treated as a core portfolio feature, not an optional extra.

---

# 3. FEATURED PROJECTS — NEW PRIORITY ORDER

The portfolio should have a dedicated section called:

# Featured Projects

or

# Selected AI Products

Do not give every project equal visual importance.

There should be three large flagship project cards.

---

# PROJECT 01 — RESEARCHLENS AI

## Priority

**#1 Featured Project / Flagship Project**

## Project Name

# ResearchLens AI

## Tagline

**AI-Powered Research Intelligence**

## Status

⚡ **IN ACTIVE DEVELOPMENT**

Do NOT use "Coming Soon".

Use:

- Active Development
- Currently Building
- Flagship Project

## Description

ResearchLens AI is an AI-powered research intelligence platform designed to transform how students and researchers discover, analyze, understand, and interact with academic knowledge.

The platform aims to reduce the time and complexity involved in navigating research literature by combining intelligent search, AI-powered analysis, retrieval systems, and interactive research workflows.

## Suggested Technologies

- Generative AI
- Large Language Models (LLMs)
- Retrieval-Augmented Generation (RAG)
- Semantic Search
- Embeddings
- Vector Databases
- FastAPI
- Next.js

Only show technologies that are genuinely used in the final implementation.

## Button Configuration

Since the project is still in development:

### Button 1

**GitHub Repository**

Use this when the repository is public.

### Button 2

**Project Overview**

Link to a dedicated project detail page or development page.

Example:

`/projects/researchlens-ai`

Do NOT add a "Live Demo" button until the application is actually deployed.

## Visual Treatment

ResearchLens AI should receive the most premium visual treatment because it is the flagship project.

Recommended labels:

```text
01
FLAGSHIP PROJECT
⚡ ACTIVE DEVELOPMENT
```

The card can be slightly larger or visually emphasized compared with other project cards.

## Recommended Future Project Detail Page

Create:

`/projects/researchlens-ai`

Suggested sections:

1. Project Overview
2. Problem Statement
3. Target Users
4. Proposed Solution
5. Key Features
6. System Architecture
7. AI Pipeline
8. Technology Stack
9. Development Progress
10. Screenshots / UI Concepts
11. Roadmap

---

# PROJECT 02 — CONTEXTHIRE

## Priority

**#2 Featured Project**

## Project Name

# ContextHire

## Tagline

**AI-Assisted Hiring Intelligence**

## Status

🟢 **LIVE PRODUCT**

## Description

ContextHire is an AI-assisted hiring intelligence platform designed to support recruiters and job seekers through intelligent resume analysis, semantic job matching, ATS compatibility checks, skill-gap analysis, and structured candidate insights.

The system uses AI and NLP to assist decision-making while keeping final hiring decisions with human reviewers.

## Suggested Technologies

Update these according to the actual project implementation:

- Python
- NLP
- Semantic Search
- SBERT
- TF-IDF
- Machine Learning
- Full-Stack Development

## Required Buttons

### Button 1

**GitHub**

Link to the GitHub repository.

Icon recommendation: GitHub icon.

### Button 2

**Live Demo**

Link:

https://contexthire.onrender.com/

Icon recommendation: External Link / Arrow Up Right.

## Button Behavior

GitHub should clearly indicate source code.

Live Demo should open the deployed application.

Recommended visual hierarchy:

```text
[ GitHub ]   [ Live Demo ↗ ]
```

The Live Demo button can be the visually stronger button for deployed products.

---

# PROJECT 03 — NEXTGEN AI STUDIO

## Priority

**#3 Featured Project**

## Project Name

# NextGen AI Studio

## Tagline

**All-in-One AI Productivity Platform**

## Status

🟢 **LIVE PRODUCT**

## Description

NextGen AI Studio is a full-stack Generative AI platform offering 30+ AI-powered tools for writing, content creation, media processing, AI detection, and productivity workflows.

The project demonstrates the integration of modern web technologies with Generative AI capabilities in a complete product environment.

## Suggested Technologies

- Next.js
- React
- TypeScript
- Gemini AI
- Generative AI

Only include technologies actually used in the project.

## Required Buttons

### Button 1

**GitHub**

Link to the project repository.

### Button 2

**Live Demo**

Link to the existing deployed NextGen AI Studio application.

Use the exact live URL currently configured in the existing portfolio/project.

---

# 4. STANDARD PROJECT BUTTON SYSTEM

Every major project should support two consistent action buttons.

## Button 1: GitHub

Purpose:

View the source code and repository.

Recommended icon:

GitHub logo.

Example:

```text
[ GitHub ]
```

## Button 2: Live Demo

Purpose:

Open the deployed application.

Recommended icon:

External Link or Arrow Up Right.

Example:

```text
[ Live Demo ↗ ]
```

## Button Rules

### Live Projects

Show:

```text
[ GitHub ] [ Live Demo ↗ ]
```

Applies to:

- ContextHire
- NextGen AI Studio
- Any other deployed project

### Development Projects

Show:

```text
[ GitHub ] [ Project Overview ↗ ]
```

Applies to:

- ResearchLens AI until deployment

### Repository Not Public

If a repository is private or unavailable:

Do not show a broken GitHub button.

Instead show:

```text
[ Project Overview ]
```

---

# 5. PROJECT CARD DESIGN

Each featured project card should include:

1. Project Number
2. Status Badge
3. Project Screenshot / Visual
4. Project Name
5. Tagline
6. Short Description
7. Technology Tags
8. GitHub Button
9. Live Demo or Project Overview Button

## Recommended Structure

```text
PROJECT NUMBER
01

STATUS
⚡ ACTIVE DEVELOPMENT

PROJECT IMAGE / SCREENSHOT

ResearchLens AI
AI-Powered Research Intelligence

Short project description explaining the real-world
problem and solution.

TECH STACK
Generative AI · RAG · LLMs · Semantic Search

[ GitHub ] [ Project Overview ↗ ]
```

---

# 6. ADD PROJECT STATUS BADGES

Use consistent project lifecycle badges.

## Available Statuses

### Live Product

🟢 LIVE PRODUCT

For deployed and usable applications.

### Active Development

⚡ ACTIVE DEVELOPMENT

For ResearchLens AI and other currently developed products.

### Completed

✓ COMPLETED

For finished projects.

### Experimental

🔬 EXPERIMENTAL

For research prototypes and experiments.

### Academic

📚 ACADEMIC PROJECT

For university-focused projects.

## Design Rule

Keep badges subtle and professional.

Avoid:

- Large emojis everywhere
- Excessive animation
- Too many colors

Use the existing portfolio color system.

---

# 7. CREATE "MORE PROJECTS" SECTION

After the three flagship projects, add:

# More Selected Projects

or

# Experiments & Technical Projects

These projects should have smaller cards:

- AI Image Captioning System
- Machine Learning Model Collection
- AI Image Upscaler
- Rule-Based Chatbot

These projects should not visually compete with the three flagship AI products.

## Smaller Card Content

Each card should include:

- Project Name
- One-line description
- Technology tags
- GitHub button
- Live button only if deployed

---

# 8. ADD "WHAT I BUILD" SECTION

Place this after Featured Projects or before Experience.

## Section Title

# What I Build

Use 4–5 focused capability cards.

### Generative AI Applications

LLM-powered applications, AI assistants, intelligent content workflows, and AI-integrated products.

### NLP & Intelligent Systems

Semantic search, text analysis, document intelligence, matching systems, and conversational applications.

### Machine Learning Systems

Predictive models, classification systems, data pipelines, and production-ready ML workflows.

### Computer Vision

Image analysis, image captioning, enhancement, and AI-powered visual applications.

### Full-Stack AI Products

Complete AI applications combining frontend interfaces, backend services, APIs, models, and deployment.

---

# 9. UPDATE ABOUT SECTION

The About section should no longer lead primarily with "student".

## Recommended Copy Direction

Start with professional identity:

> I am an aspiring AI Engineer focused on building practical intelligent products using Generative AI, Machine Learning, Natural Language Processing, and modern web technologies.

Then mention education:

> Currently pursuing a B.Tech in Computer Science with a specialization in Artificial Intelligence and Machine Learning.

Then add differentiation:

> My background in professional design gives me a unique perspective on product development. I enjoy combining technical systems with thoughtful user experiences to create products that are both intelligent and intuitive.

---

# 10. ADD PERSONAL DIFFERENTIATOR SECTION

Create a compact visual section.

## Suggested Title

# Why I Build Differently

## Core Formula

```text
AI ENGINEERING
       +
FULL-STACK DEVELOPMENT
       +
7+ YEARS OF DESIGN EXPERIENCE
       =
AI PRODUCT BUILDER
```

## Supporting Text

I combine technical AI development with years of professional creative experience. My goal is not only to build systems that work, but to create intelligent products that people can understand and enjoy using.

This should become a key part of the personal brand.

---

# 11. UPDATE SKILLS SECTION

Reorganize skills into meaningful categories.

Avoid one large collection of technology names.

## AI & Machine Learning

- Python
- TensorFlow
- PyTorch
- Scikit-learn
- Deep Learning
- Machine Learning
- Pandas
- NumPy

## Generative AI

Only include technologies genuinely used:

- LLMs
- RAG
- Prompt Engineering
- Embeddings
- Semantic Search
- AI APIs
- Vector Databases
- Agentic Workflows

## NLP

- Natural Language Processing
- Text Classification
- Semantic Similarity
- SBERT
- TF-IDF

## Computer Vision

- Image Processing
- Image Captioning
- Computer Vision Models

## Full-Stack Development

Only include technologies genuinely used:

- React
- Next.js
- TypeScript
- JavaScript
- FastAPI
- REST APIs
- Databases

## Developer Tools

- Git
- GitHub
- Docker
- Deployment Platforms

---

# 12. PROJECT SCREENSHOTS

This is one of the most important visual upgrades.

The current portfolio should not rely primarily on text.

## ContextHire Screenshots

Capture:

1. Landing Page
2. Recruiter Dashboard
3. Resume Analysis
4. Candidate Matching / Ranking

## NextGen AI Studio Screenshots

Capture:

1. Main Dashboard
2. Tool Grid
3. One or two popular AI tools
4. Product workflow

## ResearchLens AI

Until the application is complete, use:

- High-quality UI mockups
- Architecture visualization
- Product concept screens

Clearly label concepts if they are not actual running screenshots.

---

# 13. DESIGN RECOMMENDATIONS

## Keep

- Existing clean visual identity
- Existing typography direction
- Existing professional minimalism
- Personal design portfolio
- Dark/light style if currently implemented

## Improve

### Visual Hierarchy

Make the three flagship projects visually dominant.

### Spacing

Use more breathing room between major sections.

### Project Images

Add real product screenshots.

### Motion

Use subtle animations only:

- Fade-in on scroll
- Card hover
- Button hover
- Image zoom on hover

Avoid excessive:

- Floating particles
- Constant animations
- Typing effects everywhere
- Heavy transitions

### Consistency

All project cards should follow the same design system.

---

# 14. NAVIGATION UPDATE

Recommended navigation:

```text
Home
About
Projects
Experience
Design
Contact
```

Optional:

```text
Resume
```

as a highlighted navigation action.

For mobile:

Use a clean hamburger menu.

Ensure the primary CTA remains visible or easily accessible.

---

# 15. ADD PROJECT FILTERING (OPTIONAL)

If there are enough projects, add simple filters.

Example:

```text
All
Featured
Generative AI
Machine Learning
NLP
Computer Vision
```

Do not add filters if they complicate the current clean design.

Featured projects should always remain easy to discover.

---

# 16. EXPERIENCE SECTION

Keep professional experience concise.

Focus on outcomes and responsibilities.

Avoid long paragraphs.

Recommended format:

```text
ROLE
Company

Short description.

• Achievement
• Achievement
• Achievement

Technologies: ...
```

Add measurable achievements wherever possible.

---

# 17. ACHIEVEMENTS / HIGHLIGHTS

Consider adding a compact section.

## Suggested Highlights

- 2 Live AI Platforms
- 3+ AI Product Projects
- 7+ Years Creative Experience
- 3000+ Published Digital Assets

Only use verified and accurate numbers.

This section should be visually minimal.

---

# 18. DESIGN PORTFOLIO

Do NOT remove the design portfolio.

Instead, position it as a secondary but valuable part of your identity.

Suggested introduction:

> Before moving deeper into AI engineering, I built over seven years of experience in digital design and creative production. This background continues to influence how I approach product design and user experience.

Possible links:

- Adobe Stock
- Freepik
- Shutterstock
- Behance

Only include platforms and profiles that are active and professional.

---

# 19. CONTACT SECTION

End the portfolio with a strong CTA.

## Recommended Heading

# Let's Build Something Intelligent.

## Supporting Text

I'm interested in AI engineering opportunities, research collaborations, internships, and projects involving Generative AI, Machine Learning, NLP, and intelligent applications.

## Buttons

- Email Me
- LinkedIn
- GitHub

Optional:

- Download Resume

---

# 20. FOOTER

Keep minimal.

Example:

```text
© 2026 Sangram Adhikary

Designed & built by Sangram Adhikary.

GitHub · LinkedIn · Email
```

Optional small line:

> Building at the intersection of AI, technology, and design.

---

# 21. RESPONSIVE DESIGN REQUIREMENTS

The updated portfolio must work perfectly on:

- Desktop
- Laptop
- Tablet
- Mobile

## Mobile Requirements

- Project cards stack vertically
- Buttons remain easy to tap
- GitHub and Live buttons may stack on very small screens
- No horizontal scrolling
- Screenshots maintain aspect ratio
- Navigation works smoothly
- Text remains readable

---

# 22. ACCESSIBILITY REQUIREMENTS

Implement:

- Semantic HTML
- Proper heading hierarchy
- Alt text for project screenshots
- Keyboard navigation
- Visible focus states
- Sufficient color contrast
- Accessible buttons and links
- Meaningful ARIA labels where required

Do not rely only on color to communicate project status.

---

# 23. PERFORMANCE REQUIREMENTS

Optimize:

- Images using WebP/AVIF where possible
- Lazy loading for below-the-fold images
- Font loading
- Animation performance
- Bundle size

Avoid unnecessarily heavy dependencies.

Target a fast and smooth portfolio experience.

---

# 24. SEO REQUIREMENTS

Update metadata.

## Recommended Page Title

Sangram Adhikary | AI Engineer & AI Product Builder

## Meta Description

AI Engineer and AI Product Builder specializing in Generative AI, Machine Learning, NLP, Computer Vision, and full-stack intelligent applications.

## Keywords

- AI Engineer
- Machine Learning Engineer
- Generative AI Developer
- NLP Developer
- Full Stack AI Developer
- Artificial Intelligence Portfolio

Add:

- Open Graph image
- Twitter metadata
- Favicon
- Proper social preview

---

# 25. PROJECT DATA STRUCTURE RECOMMENDATION

If the portfolio is built with React/Next.js, store project data centrally.

Each project should support:

```typescript
{
  id: "researchlens-ai",
  number: "01",
  title: "ResearchLens AI",
  tagline: "AI-Powered Research Intelligence",
  description: "...",
  status: "active-development",
  featured: true,
  technologies: [],
  image: "",
  githubUrl: "",
  liveUrl: "",
  overviewUrl: "",
}
```

## Button Rendering Logic

### If GitHub URL exists

Show:

`GitHub`

### If Live URL exists

Show:

`Live Demo`

### If no Live URL but Overview URL exists

Show:

`Project Overview`

This makes the portfolio easy to update later.

---

# 26. FEATURED PROJECT FINAL ORDER

This order is final for the current upgrade.

## 01 — ResearchLens AI

**AI-Powered Research Intelligence**

Status:

⚡ ACTIVE DEVELOPMENT

Primary role:

Flagship project and future direction.

Buttons:

- GitHub
- Project Overview

---

## 02 — ContextHire

**AI-Assisted Hiring Intelligence**

Status:

🟢 LIVE PRODUCT

Primary role:

Demonstrates practical AI, NLP, semantic matching, and real-world product development.

Buttons:

- GitHub
- Live Demo

Live URL:

https://contexthire.onrender.com/

---

## 03 — NextGen AI Studio

**All-in-One AI Productivity Platform**

Status:

🟢 LIVE PRODUCT

Primary role:

Demonstrates Generative AI integration and a broad full-stack AI product.

Buttons:

- GitHub
- Live Demo

---

# 27. REMOVE OR REDUCE

Do not necessarily delete older projects, but reduce their prominence.

## Move to "More Projects"

- Rule-Based Chatbot
- Basic academic projects
- Small ML experiments
- Beginner-level applications

## Avoid

- Showing every project at equal size
- Too many technology badges
- Long descriptions
- Repetitive "AI-powered" wording
- Too many animations
- Generic stock imagery
- Fake metrics
- Fake live demos

---

# 28. FINAL SITE STRUCTURE

```text
HOME
│
├── HERO
│   ├── AI Engineer & AI Product Builder
│   ├── Introduction
│   ├── Explore My Work
│   └── Download Resume
│
├── FEATURED PROJECTS
│
│   01 ResearchLens AI
│      ⚡ Active Development
│      [GitHub] [Project Overview]
│
│   02 ContextHire
│      🟢 Live Product
│      [GitHub] [Live Demo]
│
│   03 NextGen AI Studio
│      🟢 Live Product
│      [GitHub] [Live Demo]
│
├── WHAT I BUILD
│
├── ABOUT ME
│
├── WHY I BUILD DIFFERENTLY
│   AI + Full Stack + Design
│
├── TECH STACK
│
├── EXPERIENCE
│
├── MORE SELECTED PROJECTS
│
├── DESIGN PORTFOLIO
│
├── CONTACT
│
└── FOOTER
```

---

# 29. IMPLEMENTATION CHECKLIST

## Content

- [ ] Update hero headline
- [ ] Update hero description
- [ ] Add Explore My Work button
- [ ] Add Download Resume button
- [ ] Update About section
- [ ] Add What I Build section
- [ ] Add Why I Build Differently section

## Featured Projects

- [ ] Add ResearchLens AI as Project 01
- [ ] Set ResearchLens status to Active Development
- [ ] Add ContextHire as Project 02
- [ ] Add ContextHire Live Demo link
- [ ] Add ContextHire GitHub link
- [ ] Keep NextGen AI Studio as Project 03
- [ ] Add NextGen GitHub link
- [ ] Add NextGen Live Demo link

## Design

- [ ] Add real project screenshots
- [ ] Create consistent project cards
- [ ] Add status badges
- [ ] Add hover effects
- [ ] Improve visual hierarchy
- [ ] Ensure mobile responsiveness

## Technical

- [ ] Optimize images
- [ ] Improve SEO metadata
- [ ] Add Open Graph metadata
- [ ] Check accessibility
- [ ] Test all external links
- [ ] Ensure GitHub links work
- [ ] Ensure Live Demo links work

---

# 30. FINAL DESIGN PRINCIPLE

The upgraded portfolio should communicate:

> **I don't just experiment with AI models. I build AI-powered products.**

The visual and content hierarchy should support this story:

1. ResearchLens AI represents where I am going.
2. ContextHire proves I can build and deploy practical AI systems.
3. NextGen AI Studio demonstrates experience building broad Generative AI products.
4. Supporting projects demonstrate technical foundations in Machine Learning, NLP, and Computer Vision.
5. My design background differentiates me from typical AI engineering candidates.

---

# FINAL INSTRUCTION FOR IMPLEMENTATION

Do not completely redesign the existing portfolio.

Preserve:

- Existing personal identity
- Existing visual language
- Existing color palette where possible
- Existing typography direction
- Existing design portfolio

Upgrade the portfolio by improving:

- Project hierarchy
- Personal branding
- Calls to action
- Project presentation
- Visual storytelling
- Product screenshots
- GitHub and Live Demo navigation
- AI Engineer positioning

The final website should feel like the portfolio of an emerging AI Engineer who is actively building serious AI products, rather than simply a student listing academic projects.

The final professional identity should be:

# Sangram Adhikary
## AI Engineer & AI Product Builder

**Building intelligent, human-centered products with Generative AI, Machine Learning, NLP, and modern full-stack technologies.**
