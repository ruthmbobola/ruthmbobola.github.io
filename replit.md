# Overview

This is a personal portfolio website for Ruth Chansa, a software engineer and web developer based in the Democratic Republic of Congo. The site showcases her professional profile, services, portfolio, and contact information. Built as a modern single-page application, it features a professional design with sections for hero introduction, about, services, portfolio gallery, and contact form.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming support (light/dark modes)
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers
- **Animations**: Custom hooks for typewriter effects, counters, and intersection observers for scroll-based animations

## Backend Architecture
- **Server**: Express.js with TypeScript
- **Development Setup**: Vite integration for hot module replacement in development
- **API Structure**: RESTful API with `/api` prefix routing
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Error Handling**: Centralized error handling middleware

## Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for rapid development
- **Database Client**: Neon Database serverless driver for PostgreSQL connections

## Authentication and Authorization
- **Session Management**: PostgreSQL session store using connect-pg-simple
- **User Schema**: Basic user table with username/password fields and UUID primary keys
- **Validation**: Zod schemas for type-safe data validation

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database queries and migrations

### UI and Styling
- **Radix UI**: Headless, accessible component primitives
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Icon library for UI elements
- **Font Awesome**: Icon library for social media and contact icons

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment optimizations and error overlay

### Third-party Services
- **Google Fonts**: Inter font family for typography
- **Unsplash**: Placeholder images for portfolio and profile photos
- **External CDNs**: Font Awesome icons served via CDN

### Form and Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library
- **@hookform/resolvers**: Bridge between React Hook Form and Zod

The application follows a monorepo structure with shared TypeScript types and schemas, enabling type safety across client and server boundaries. The development setup includes hot reloading and error overlays for efficient development workflow.