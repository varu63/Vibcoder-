# 🚀 Vibecode Playground

Vibecode Playground is a modern AI-powered browser IDE built using Next.js, Monaco Editor, WebContainers, and Ollama.
It allows developers to write, edit, run, and manage projects directly inside the browser with real-time execution and AI-assisted coding.

---

# ✨ Features

* 🔐 Authentication using Google & GitHub
* 🎨 Modern UI with TailwindCSS + ShadCN
* 🌙 Dark / Light mode
* 📁 Advanced file explorer
* 🖊️ Monaco code editor integration
* ⚡ Real-time code execution using WebContainers
* 💻 Built-in terminal with xterm.js
* 🤖 AI-powered code suggestions using Ollama
* 📦 Multiple starter templates
* 📱 Responsive developer-focused interface

---

# 🛠️ Tech Stack

| Technology    | Usage              |
| ------------- | ------------------ |
| Next.js 15    | Frontend + Backend |
| TypeScript    | Type Safety        |
| TailwindCSS   | Styling            |
| ShadCN UI     | UI Components      |
| Monaco Editor | Code Editor        |
| WebContainers | Browser Runtime    |
| xterm.js      | Terminal           |
| NextAuth      | Authentication     |
| MongoDB       | Database           |
| Ollama        | AI Suggestions     |

---

# 📦 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/Aestheticsuraj234/vibecode-playground.git
```

---

## 2. Move into Project Folder

```bash
cd vibecode-playground
```

---

## 3. Install Dependencies

```bash
npm install
```

If dependencies fail:

```bash
npm install --legacy-peer-deps
```

---

# 🔑 Environment Variables

Create a `.env.local` file in the root directory.

```env
AUTH_SECRET=your_auth_secret

AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_secret

AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_secret

DATABASE_URL=your_mongodb_url

NEXTAUTH_URL=http://localhost:3000
```

---

# 🧠 Setup Ollama (Required for AI Features)

## Install Ollama

Download and install Ollama:

👉 https://ollama.com

---

## Pull AI Model

```bash
ollama pull codellama
```

You can also use:

* deepseek-coder
* mistral
* llama3
* qwen2.5-coder

---

## Start Ollama

```bash
ollama run codellama
```

If Ollama is not running, AI suggestions will not work.

---

# ▶️ Run the Project

Start the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# 🧪 Production Build

## Build Project

```bash
npm run build
```

## Start Production Server

```bash
npm start
```

---

# 📂 Project Structure

```bash
vibecode-playground/
│
├── app/                  # Next.js App Router
├── components/           # Reusable UI components
├── features/             # Feature modules
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── prisma/               # Database configuration
├── public/               # Static assets
├── vibecode-starters/    # Starter templates
│
├── auth.ts
├── middleware.ts
├── next.config.ts
├── package.json
└── README.md
```

---

# ⌨️ Keyboard Shortcuts

| Shortcut     | Action                 |
| ------------ | ---------------------- |
| Ctrl + Space | Trigger AI Suggestions |
| Double Enter | Generate AI Completion |
| Tab          | Accept Suggestion      |

---

# 🔥 Main Functionalities

## 🖊️ Monaco Editor

Advanced code editor with:

* syntax highlighting
* auto-completion
* formatting
* IntelliSense support

---

## ⚡ WebContainers

Run frontend/backend apps directly inside the browser without local setup.

---

## 🤖 AI Assistant

Integrated AI assistant powered by Ollama for:

* code completion
* debugging
* refactoring
* explanations

---

# 🚨 Common Issues

## 1. AI Suggestions Not Working

Make sure:

* Ollama is installed
* Ollama server is running
* Model is downloaded

Run:

```bash
ollama run codellama
```

---

## 2. Authentication Error

Check:

* Google OAuth credentials
* GitHub OAuth credentials
* NEXTAUTH_URL value

---

## 3. MongoDB Connection Failed

Verify:

* DATABASE_URL is correct
* MongoDB Atlas IP whitelist allows your IP

---

## 4. WebContainers Not Running

WebContainers require:

* Chromium-based browser
* HTTPS in production
* modern browser support

Use:

* Chrome
* Edge
* Brave

Avoid:

* old Firefox versions

---

# 🌍 Deployment

You can deploy using:

* Vercel
* Netlify
* Railway

Recommended: **Vercel**

---

# 📸 Screenshots

Add screenshots here:

```md
![Home Page](./public/home.png)
![Editor](./public/editor.png)
```

---

# 🤝 Contributing

Contributions are welcome.

## Steps

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push branch

```bash
git push origin feature-name
```

5. Create Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed by Suraj Kumar Jha

GitHub:
https://github.com/Aestheticsuraj234

---

# ⭐ Support

If you like this project:

* Star the repository
* Fork the project
* Share it with developers

---

