# Weather Detection App

## Overview

A real-time weather detection application that identifies rain, sunny conditions, and time periods with beautiful visual indicators and automatic updates. The app features a modern, clean interface inspired by Apple Weather and AccuWeather, built with React, TypeScript, and shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Framework**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and dark/light theme support
- **State Management**: React hooks with TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Component Design System
- **Weather Components**: Modular components for temperature display, weather icons, time period indicators, and weather cards
- **Theme System**: Custom theme provider with automatic dark/light mode detection and manual toggle
- **Design Tokens**: Consistent color palette with weather-specific states (sunny/rainy) and time period colors (morning/noon/night)
- **Animation**: Subtle animations using Tailwind CSS for weather icons and state transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database ORM**: Drizzle ORM configured for PostgreSQL with schema migrations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session storage with connect-pg-simple
- **Development Setup**: Hot module replacement with Vite middleware integration

### Data Layer
- **Schema**: User management schema with username/password authentication
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development
- **Type Safety**: Full TypeScript integration with Drizzle ORM for compile-time type checking

### Real-time Features
- **Auto-refresh**: Weather data updates every 10 seconds with simulated conditions
- **Live Clock**: Real-time display with second-level precision
- **Time Period Detection**: Automatic morning/noon/night detection with visual indicators
- **Manual Refresh**: User-triggered refresh with loading states and animations

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe SQL ORM with PostgreSQL dialect
- **express**: Web application framework for Node.js

### UI Dependencies
- **@radix-ui/***: Headless UI components for accessibility and behavior
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: SVG icon library for weather and UI icons

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for Node.js
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit integration plugin

### Fonts and Assets
- **Google Fonts**: Inter for body text, Space Grotesk for display text
- **Custom Weather Icons**: Animated sun and rain icons with Lucide React base