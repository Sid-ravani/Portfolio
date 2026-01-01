# Siddharth Ravani Portfolio

## Overview

A personal portfolio website for Siddharth Ravani, a mechanical engineering student. The application showcases engineering projects, provides contact functionality, and includes an admin panel for content management. Built as a full-stack TypeScript application with React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for page transitions and scroll effects
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Build System**: Vite for frontend, esbuild for server bundling
- **Development**: tsx for TypeScript execution in development

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` defines all database tables
- **Migrations**: Drizzle Kit for schema management (`db:push` command)

### Authentication
- **Provider**: Replit OpenID Connect (OIDC) authentication
- **Session Storage**: PostgreSQL-backed sessions via connect-pg-simple
- **Implementation**: Located in `server/replit_integrations/auth/`
- **Protected Routes**: Admin routes require authentication via `isAuthenticated` middleware

### API Structure
- **Route Definitions**: Centralized in `shared/routes.ts` with Zod schemas
- **Endpoints**:
  - `GET /api/projects` - List all projects (public)
  - `POST /api/projects` - Create project (authenticated)
  - `DELETE /api/projects/:id` - Delete project (authenticated)
  - `POST /api/messages` - Submit contact form (public)
  - `GET /api/messages` - List messages (authenticated)
  - `GET /api/auth/user` - Get current user (authenticated)

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/   # UI components
│       ├── hooks/        # Custom React hooks
│       ├── pages/        # Route components
│       └── lib/          # Utilities
├── server/           # Express backend
│   ├── replit_integrations/auth/  # Auth module
│   ├── routes.ts     # API routes
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared types and schemas
│   ├── schema.ts     # Drizzle database schema
│   ├── routes.ts     # API route definitions
│   └── models/       # Data models
└── migrations/       # Database migrations
```

## External Dependencies

### Database
- **PostgreSQL**: Primary data store (requires DATABASE_URL environment variable)
- **Drizzle ORM**: Type-safe database queries and schema management

### Authentication
- **Replit OIDC**: OAuth authentication provider
- **Session Secret**: Requires SESSION_SECRET environment variable
- **ISSUER_URL**: Optional, defaults to Replit's OIDC endpoint

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality
- **Vaul**: Drawer component

### Build Tools
- **Vite**: Frontend bundling with HMR
- **esbuild**: Production server bundling
- **PostCSS/Autoprefixer**: CSS processing