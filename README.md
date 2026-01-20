# eval | Code Playground
A lightweight and modern multi-language playground for quick code experimentation. Run JavaScript, Python, Ruby, PHP, and Lua directly in your interface.
Engine & Architecture:
This project is built with React 19 and Vite, featuring a robust editor experience powered by React Ace (based on Ace Builds). Code execution is handled entirely client-side using codapi.

> ⚠️ Browser Only Runtimes
> All supported languages in this playground execute entirely in the browser. There is no backend involved for code execution.
> For technical details on how these runtimes work without a server, please refer to the codapi-js only-browser documentation.
> 
## 🚀 Features
 * Multi-language Support: Run JavaScript, Python, Ruby, PHP, and Lua.
 * Modern Stack: Built with React 19, Vite, and TypeScript.
 * Beautiful UI: Styled with Tailwind CSS v4 and DaisyUI.
 * Pro Editor Experience: Integrated React Ace for syntax highlighting and editing features.
 * Theme Support: The playground editor supports both Dark and Light modes (Ace Editor themes).
 * Client-Side Execution: Zero latency, 100% privacy (code never leaves your browser).
## 📸 Language Previews
| Language | Preview |
|---|---|
| JavaScript | https://dev2forge.is-a.software/eval/src/assets/images/png/js.png |
| Python | https://dev2forge.is-a.software/eval/src/assets/images/png/python.png |
| Ruby | https://dev2forge.is-a.software/eval/src/assets/images/png/ruby.png |
| PHP | https://dev2forge.is-a.software/eval/src/assets/images/png/php.png |
| Lua | https://dev2forge.is-a.software/eval/src/assets/images/png/lua.png |
## 🛠️ Getting Started
Follow these steps to set up the project locally. This project uses pnpm for package management.
Prerequisites
 * Node.js installed
 * pnpm installed (npm install -g pnpm)
Installation
 * Clone the repository:
   git clone https://github.com/Dev2Forge/eval.git

 * Navigate to the project directory:
   cd eval

 * Install dependencies:
   pnpm install

 * Start the development server:
   pnpm dev

 * Open your browser and navigate to:
   http://localhost:5173
## 🗺️ Roadmap
### Core & Logic
 * [ ] Implement deeper logic validation for executed code.
 * [ ] Add support for additional browser-compatible languages (Scaling support as the project grows).
 * [ ] Optimize runtime performance for larger snippets.
### UI/UX
 * [ ] Expand Dark/Light mode toggling to the entire web interface (currently limited to the Editor component).
 * [ ] Improve mobile responsiveness.
##🤝 Credits & Technologies
This project stands on the shoulders of giants:
 * Execution Engine: codapi-js (via @antonz/codapi).
 * Editor Core: Ace Builds.
 * React Component: React Ace.
 * Developed by: Dev2Forge.
## ⚖️ Third-Party Licenses
This project uses the following open-source libraries. You can find their original licenses here:
 * Ace Builds: BSD-3-Clause License
 * React Ace: MIT License
 * codapi-js: MIT License
 * 
## 📄 License Notice

Copyright (C) 2026 Dev2Forge

This project is licensed under the GNU Affero General Public License v3.0 or later (AGPL-3.0-or-later). See the [LICENSE](./LICENSE) file in the repository for the full license text or visit https://www.gnu.org/licenses/.

SPDX-License-Identifier: AGPL-3.0-or-later