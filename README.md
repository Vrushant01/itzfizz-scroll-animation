# ItzFizz — Scroll-Driven Hero Animation

An interactive, scroll-driven hero section built with React, Vite, Tailwind CSS, and GSAP ScrollTrigger. As the user scrolls, a sports car drives across the road, leaving behind a green trail that dynamically illuminates the headline letter by letter while four statistic cards fade into view.

---

## Live Links

- **Live Demo:** [https://itzfizz-scroll-animation-sandy.vercel.app/](https://itzfizz-scroll-animation-sandy.vercel.app/)
- **GitHub Repository:** [https://github.com/Vrushant01/itzfizz-scroll-animation](https://github.com/Vrushant01/itzfizz-scroll-animation)

---

## Features

- **Scroll-Driven Car Animation:** McLaren sports car travels horizontally across the road based directly on scroll progress.
- **Dynamic Green Trail:** A green road trail expands in real time directly behind the moving car.
- **Letter-by-Letter Headline Reveal:** The centered "WELCOME ITZFIZZ" headline illuminates letter by letter as the car passes each character, with full reverse-scroll support.
- **Four Statistic Cards:** Floating metric cards fade in smoothly at dedicated scroll milestones:
  - **58%** — *Increase in pick up point use*
  - **23%** — *Decreased in customer phone calls*
  - **27%** — *Increase in pick up point use*
  - **40%** — *Decreased in customer phone calls*
- **Pinned Track:** GSAP ScrollTrigger pins the viewport track during the 200vh scroll container for a seamless experience.

---

## Tech Stack

- **[React 19](https://react.dev/):** Component-based UI library.
- **[Vite](https://vite.dev/):** Fast frontend build tool and development server.
- **[JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript):** Core application and animation logic.
- **[Tailwind CSS v4](https://tailwindcss.com/):** Modern utility styling and reset foundation.
- **[Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS):** Custom positioning, road sizing, and card styling.
- **[GSAP](https://greensock.com/gsap/):** High-performance animation engine.
- **[GSAP ScrollTrigger](https://greensock.com/scrolltrigger/):** Scroll-based triggers, scrubbing, and element pinning.

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (v18+ recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Vrushant01/itzfizz-scroll-animation.git
   cd itzfizz-scroll-animation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

---

## Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```text
Hero/
├── public/
│   ├── car.png           # Sports car image asset
│   └── favicon.svg       # Application favicon
├── src/
│   ├── App.css           # Hero section, track, cards, and text styles
│   ├── App.jsx           # Main hero component & GSAP ScrollTrigger logic
│   ├── index.css         # Global resets and Tailwind CSS setup
│   └── main.jsx          # React application entry point
├── index.html            # HTML shell
├── package.json          # Project scripts and dependencies
├── vite.config.js        # Vite & Tailwind plugin configuration
└── README.md             # Project documentation
```

---

## License

This project is open source and available under the [MIT License](LICENSE).
