# 🚀 Express TypeScript API Boilerplate

A **production-ready REST API boilerplate** built with **Express.js** and **TypeScript**, featuring PostgreSQL integration via **Prisma**, testing with **Jest**, and **Docker** for seamless development and deployment.

---

## 📦 Tech Stack

- **Node.js + Express.js** – Web server & routing
- **TypeScript** – Static typing
- **PostgreSQL** – Relational database
- **Prisma** – Modern type-safe ORM
- **Jest + Supertest** – Testing framework
- **Docker + Docker Compose** – Containerized development
- **Dotenv** – Environment configuration
- **ESLint + Prettier** – Code quality and formatting
- **GitHub Actions** – Continuous integration

---

## 🛠️ Features

- ✅ Modular folder structure
- ✅ PostgreSQL setup with Prisma
- ✅ Typed request/response handlers
- ✅ Full CRUD example (`/users`)
- ✅ Seed script for local dev
- ✅ Unit & integration test examples
- ✅ Dockerized for local & production use
- ✅ Ready-to-deploy to Render, Railway, Fly.io, etc.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/) (local or container)

---

### 🧑‍💻 Development (Local Machine)

```bash
# Clone the project
git clone https://github.com/yourusername/express-ts-api-boilerplate.git
cd express-ts-api-boilerplate

# Install dependencies
npm install

# Setup database (local PostgreSQL required)
npx prisma migrate dev --name init
npx prisma db seed

# Start the dev server
npm run dev
