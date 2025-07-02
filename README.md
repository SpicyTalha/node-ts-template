# 📦 node-ts-template

A lightweight and flexible Node.js + TypeScript starter template. Preconfigured with essential tools to help you start building scalable backend applications fast — without boilerplate hassle.

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **TypeScript** – static typing
- **Express** – web server framework
- **ts-node** – run TypeScript directly
- **nodemon** – auto-restarts server on changes
- **ESLint** – code linting
- **Prettier** – code formatting
- **tslib** – runtime TypeScript helpers
- Custom **logger** utility
- Modular **routes** support

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16+ installed
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/SpicyTalha/node-ts-template.git
cd node-ts-template
```

### 2. Install Dependencies

```bash
npm install
```
Or if using Yarn:
```bash
yarn install
```

### 3. Install tslib

```bash
npm install tslib
```

### 4. Start the Development Server

```bash
npm run dev
```

---

## 📂 Project Structure

```bash
node-ts-template/
├── src/
│   ├── server.ts         # Entry point
│   ├── routes/           # All route files
│   └── libs/
│       └── logger.ts     # Custom logger utility
├── tsconfig.json         # TypeScript config
├── package.json          # Scripts and dependencies
└── README.md             # You’re reading this!
```

---

## 📜 Scripts

| Command            | Description                                |
|--------------------|--------------------------------------------|
| `npm run dev`      | Start development server with hot reload   |
| `npm run build`    | Compile TypeScript to JavaScript (`dist/`) |
| `npm start`        | Run the compiled server                    |
| `npm run lint`     | Run ESLint to check code quality           |
| `npm run format`   | Format code using Prettier                 |

---

## 📄 License

This project is licensed under the **MIT License**.  
You are free to use, copy, modify, merge, publish, and distribute the software with proper attribution.

See the [LICENSE](./LICENSE) file for full license details.

