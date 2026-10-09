# 3D Personal Portfolio - Sivasubramanian M

An interactive, 3D personal portfolio website showcasing data science, AI projects, and UI/UX engineering work. Built with immersive WebGL graphics, custom shaders, smooth animations, and sound effects.

---

## 🚀 Features

- **Interactive 3D Scene**: Custom 3D room, avatar, and lab models powered by **Three.js** and GLSL shaders.
- **Smooth Navigation & Scroll**: Inertia scrolling and synchronized timeline animations powered by **Lenis** and **GSAP**.
- **Interactive Audio**: Immersive ambient sounds and audio feedback managed via **Howler.js**.
- **Responsive & Clean UI**: Crafted with **Vue 3** and modern SCSS.
- **Showcase Projects**:
  - **Rebook**: Campus book exchange platform.
  - **Netflix Analytics Dashboard**: Interactive Power BI & Python analytics.
  - **Talkify & Cricket Scoreboard UI**: High-fidelity Figma UI/UX prototyping.

---

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (`<script setup>`)
- **3D & Graphics**: [Three.js](https://threejs.org/) & Custom GLSL Shaders via [vite-plugin-glsl](https://github.com/UstymUkhman/vite-plugin-glsl)
- **Animation**: [GSAP](https://gsap.com/) & [Lenis](https://lenis.darkroom.engineering/)
- **Audio Engine**: [Howler.js](https://howlerjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: SCSS / CSS Custom Properties

---

## 💻 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/sivsubramanian/Personal-3D-portfolio.git

# Navigate into the project directory
cd Personal-3D-portfolio

# Install dependencies
npm install
```

### Development Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `http://localhost:3000` |
| `npm run build` | Typechecks with `vue-tsc` and compiles production bundle to `dist/` |
| `npm run preview` | Locally serves the production build |
| `npm run typecheck` | Runs TypeScript type checking |

---

## 📁 Project Structure

```text
├── public/              # Static public assets (fonts, icons, meta)
├── src/
│   ├── assets/          # Models (.glb), textures, sounds, styles
│   │   ├── images/      # Active project imagery (Rebook, Netflix, Talkify)
│   │   ├── models/      # 3D GLTF models (avatar, room, desk, etc.)
│   │   └── textures/    # PBR & baked shader textures
│   ├── components/      # Reusable Vue components (Header, Logo, Buttons)
│   ├── composables/     # Vue composables (routing, scroll, audio)
│   ├── content/         # Project metadata and case studies
│   ├── features/        # Home and feature-specific components
│   ├── i18n/            # Internationalization & translations
│   ├── three/           # Three.js scene setup, shaders, 3D object controllers
│   ├── types/           # TypeScript definitions
│   ├── utils/           # Helper utilities
│   ├── App.vue          # Root component
│   └── main.ts          # Application entry point
├── package.json         # Project scripts & dependencies
└── vite.config.ts       # Vite & GLSL build configuration
```

> **Note on Asset Optimization:** Unused demo assets, empty directories, and obsolete template legal notices have been cleaned up to maintain a lightweight, production-grade repository while keeping 100% of active 3D models and interactive features intact.

---

## 🙌 Credits & Acknowledgements

This portfolio was developed with great inspiration and technical reference from the work of **David Heckhoff** ([david-hckh.com](https://david-hckh.com)). Special appreciation for his creative 3D concepts, shaders, and interactive web patterns.
