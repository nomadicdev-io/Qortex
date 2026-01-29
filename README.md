# Qortex

**Unified Storage, Auth & File Sharing Platform**

A modern, full-stack application built for developers, providing advanced storage capabilities, authentication, and file sharing utilities powered by cutting-edge technologies.

---

## 🏗️ Architecture Overview

Qortex is a **monorepo full-stack application** with a clear separation between backend and frontend:

```
┌─────────────────────────────────────────────────────┐
│                   Qortex Platform                   │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────────┐         ┌──────────────────┐    │
│  │   Frontend   │  HTTP   │     Backend      │    │
│  │    React     │◄───────►│   Elysia.js      │    │
│  │  (Tailwind)  │         │  (Bun Runtime)   │    │
│  └──────────────┘         └──────────────────┘    │
│                                   │                │
│                          ┌────────┴────────┐       │
│                          ▼                 ▼       │
│                    ┌──────────┐     ┌──────────┐  │
│                    │ MongoDB  │     │  Redis   │  │
│                    └──────────┘     └──────────┘  │
│                          ▼                         │
│                    ┌──────────┐                    │
│                    │  SQLite  │                    │
│                    └──────────┘                    │
└─────────────────────────────────────────────────────┘
```

### Directory Structure

```
Qortex/
├── server/              # Backend application (Elysia.js)
│   ├── index.ts         # Main server entry point
│   ├── router/          # API route handlers
│   │   ├── index.ts     # Router aggregation
│   │   └── uploads/     # File upload routes
│   ├── plugins/         # Elysia plugins
│   │   ├── global.ts    # Global middleware (JWT, rate limit, logging)
│   │   ├── static.ts    # Static file serving
│   │   └── openAPI.ts   # API documentation
│   ├── db/              # Database connections
│   │   └── index.ts     # MongoDB, Redis, SQLite setup
│   ├── auth/            # Authentication logic
│   ├── middlewares/     # Custom middleware
│   ├── lib/             # Shared utilities
│   └── types/           # TypeScript type definitions
│
├── src/                 # Frontend application (React)
│   ├── main.tsx         # React entry point
│   ├── App.tsx          # Root component
│   ├── index.html       # HTML template
│   ├── index.css        # Global styles
│   ├── components/      # React components
│   │   └── ui/          # Reusable UI components
│   ├── assets/          # Static assets (images, styles)
│   └── lib/             # Frontend utilities
│
├── public/              # Public static files
├── build/               # Production build output
├── logs/                # Application logs
├── index.ts             # Application entry point
├── build.ts             # Custom build script
└── package.json         # Dependencies and scripts
```

---

## 🚀 Key Technologies

### Backend Stack
- **[Bun](https://bun.sh/)** - Ultra-fast JavaScript runtime and toolkit
- **[Elysia.js](https://elysiajs.com/)** - Ergonomic web framework built for Bun
- **[MongoDB](https://www.mongodb.com/)** (via Mongoose) - Primary database
- **[Redis](https://redis.io/)** - Caching and session management
- **[SQLite](https://www.sqlite.org/)** - Lightweight local database (translations)

### Frontend Stack
- **[React 19](https://react.dev/)** - UI library
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library

### Security & Middleware
- **JWT Authentication** - Token-based auth with `@elysiajs/jwt`
- **Rate Limiting** - Request throttling with `elysia-rate-limit`
- **CORS** - Cross-origin resource sharing
- **Bearer Token** - Authorization header handling
- **IP Tracking** - Client IP detection with `elysia-ip`

### Developer Experience
- **TypeScript** - Type-safe development
- **Hot Module Reloading** - Instant feedback during development
- **Server Timing** - Performance monitoring
- **Logixlysia** - Advanced logging with rotation
- **OpenAPI** - Auto-generated API documentation

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **[Bun](https://bun.sh/)** v1.3.8 or higher
- **MongoDB** instance (local or cloud)
- **Redis** instance (local or cloud)
- **Node.js** (optional, for compatibility)

---

## ⚙️ Environment Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Qortex
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Configure environment variables:**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

   Update `.env` with your configuration:
   ```env
   # Server Configuration
   NODE_ENV=development
   BUN_ENV=development
   PORT=8088
   DEBUG=true
   HOST=http://127.0.0.1:8088

   # Application
   APP_NAME=Qortex
   APP_VERSION=1.0.0
   APP_ID=QRTX72FGHS34ID2026

   # Database
   MONGO_URI=mongodb://localhost:27017
   MONGO_DB_NAME=qortex
   REDIS_URI=redis://localhost:6379

   # JWT
   JWT_SECRET=your-super-secret-jwt-key-here
   ```

---

## 🎯 Getting Started

### Development Mode

Start the development server with hot reloading:

```bash
bun dev
```

The application will be available at:
- **Frontend:** `http://localhost:8088`
- **API:** `http://localhost:8088/api`
- **API Docs:** `http://localhost:8088/swagger`

### Production Build

Build the application for production:

```bash
bun run build
```

This will:
- Compile TypeScript to JavaScript
- Bundle frontend assets with Tailwind CSS
- Minify code and generate source maps
- Output to the `build/` directory

### Production Mode

Run the production build:

```bash
bun start
```

---

## 🛠️ Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **dev** | `bun dev` | Start development server with hot reload |
| **build** | `bun run build` | Build for production |
| **start** | `bun start` | Run production build |

---

## 🔌 API Routes

The API is organized under the `/api` prefix:

- **Health Check:** `GET /api/health` - Server health status
- **Uploads:** `/api/uploads/*` - File upload endpoints

All routes are protected with:
- Rate limiting (60 requests per minute)
- JWT authentication (where applicable)
- Bearer token validation
- IP tracking and logging

---

## 🗄️ Database Architecture

### MongoDB
Primary database for application data, connected via Mongoose with automatic connection management.

### Redis
Used for:
- Session storage
- Caching frequently accessed data
- Rate limiting counters

### SQLite
Local database for translation data and offline capabilities.

---

## 📝 Logging

Application logs are stored in the `logs/` directory with:
- **Rotation:** Daily rotation with 7-day retention
- **Compression:** Automatic log compression
- **Max Size:** 10MB per log file
- **Format:** `{timestamp} {level} {duration} {method} {pathname} {status} {message} {ip}`

---

## 🔐 Security Features

- **JWT Authentication** - 720-day token expiration with HS256 algorithm
- **Rate Limiting** - 60 requests per minute per IP
- **CORS Protection** - Configurable cross-origin policies
- **Bearer Token** - Standard authorization header support
- **IP Tracking** - Request origin monitoring
- **Environment Variables** - Sensitive data protection

---

## 🎨 Frontend Features

- **React 19** with StrictMode
- **Hot Module Reloading** for instant updates
- **Tailwind CSS 4** with custom configuration
- **Radix UI** components for accessibility
- **TypeScript** for type safety
- **Path Aliases** (`@/*` for src, `@server/*` for server)

---

## 📦 Build System

The custom build script (`build.ts`) provides:
- **Flexible CLI options** - Customize build configuration
- **Tailwind CSS integration** - Automatic CSS processing
- **Minification** - Production-ready code
- **Source maps** - Debugging support
- **Build analytics** - File size and timing reports

Example build with options:
```bash
bun run build.ts --outdir=dist --minify --sourcemap=linked
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary.

---

## 👥 Author

**Quadbits Lab**

---

## 🆘 Support

For issues, questions, or contributions, please open an issue in the repository.

---

**Built with ❤️ using Bun and Elysia.js**
