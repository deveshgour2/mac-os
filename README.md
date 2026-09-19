# macOS Portfolio

A personal portfolio website built as an interactive macOS desktop simulation — draggable, resizable windows, a magnifying Dock, a working terminal, and custom app icons, all running in the browser.

**Live Demo:** [mac-os-portfolio.vercel.app](https://mac-os-portfolio-lzjdontdo-deveshgour2s-projects.vercel.app/)

---

## ✨ Features

- 🖥️ **macOS-style Desktop UI** — menu bar with live clock, wallpaper, and dock
- 🪟 **Draggable & Resizable Windows** — powered by `react-rnd`, just like real macOS windows
- 🔍 **Dock Magnification** — icons scale smoothly as your cursor moves across the dock, mirroring macOS's native dock behavior
- 💻 **Interactive Terminal (CLI)** — an in-browser terminal emulator built with `react-console-emulator`
- 🎨 **Custom App Icons** — hand-crafted SVG icons (Calendar, Mail, Notes, PDF Viewer, Terminal, GitHub, Safari/Link, Spotify) styled to match macOS's rounded-square, gradient aesthetic
- 📱 Responsive layout

## 🛠️ Tech Stack

- **React** (Vite)
- **react-rnd** — draggable/resizable window management
- **react-console-emulator** — terminal emulation
- **CSS3** — glassmorphism/blur effects, gradients, animations
- **Vercel** — deployment

## 📂 Project Structure

\```
src/
├── components/
│   ├── Windows/
│   │   └── MacWindows.jsx     # Draggable/resizable window wrapper
│   ├── Cli.jsx                 # Terminal window
│   ├── Dock.jsx                 # macOS-style dock with magnification
│   └── ...
├── assets/
│   └── icons/                  # Custom macOS-style SVG icons
├── App.jsx
└── main.jsx
\```

## 🚀 Getting Started

Clone the repo and install dependencies:

\```bash
git clone https://github.com/deveshgour2/mac-os-portfolio.git
cd mac-os-portfolio
npm install
\```

Run the development server:

\```bash
npm run dev
\```

Build for production:

\```bash
npm run build
\```

## 📦 Deployment

This project is deployed on [Vercel](https://vercel.com/). Every push to `main` triggers an automatic deployment.

## 🙋‍♂️ Author

**Devesh Gour**
- GitHub: [@deveshgour2](https://github.com/deveshgour2)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
