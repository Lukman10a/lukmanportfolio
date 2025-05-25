# Tech Context: Lukman's Portfolio Website

## Core Technologies
1. **Next.js (^15.1.4)**: React framework providing server-side rendering, static site generation, and routing
2. **React (^19.0.0)**: Component-based UI library with latest features
3. **TypeScript (^5)**: Strongly typed programming language that builds on JavaScript
4. **Tailwind CSS (^3.4.1)**: Utility-first CSS framework for rapid UI development
5. **Framer Motion (^12.6.3)**: Animation library for React
6. **GSAP (^3.12.7)**: Professional-grade animation library with React integration (@gsap/react ^2.1.2)
7. **Three.js (^0.175.0) / React Three Fiber (^9.1.1)**: 3D graphics libraries for WebGL rendering
8. **Lenis (^1.2.3)**: Smooth scrolling library

## Frontend Architecture
- **React 19**: Latest React with concurrent features
- **Next.js Pages Router**: File-system based routing with dynamic routes
- **Tailwind CSS**: Utility-first styling with custom design system
- **TypeScript**: Full type safety across the application
- **Responsive Design**: Mobile-first approach with custom breakpoints

## Animation & Interaction Technologies
- **Framer Motion**: UI element animations and page transitions
- **GSAP with React**: Complex animation sequences and timelines
- **React Three Fiber**: 3D animations and WebGL rendering
- **React Three Drei (^10.0.5)**: Useful helpers for Three.js
- **React Spring Three (^9.7.5)**: Spring-physics based animations for 3D
- **AOS (^2.3.4)**: Animate On Scroll library
- **Lenis**: Smooth scrolling implementation
- **CSS Animations**: Custom keyframes and transitions

## UI Component Libraries
- **Radix UI**: Accessible component primitives
  - `@radix-ui/react-accordion (^1.2.2)`
  - `@radix-ui/react-dialog (^1.1.4)`
  - `@radix-ui/react-icons (^1.3.2)`
  - `@radix-ui/react-scroll-area (^1.2.2)`
- **Lucide React (^0.471.1)**: Modern icon library
- **React Icons (^5.5.0)**: Popular icon library
- **Heroicons (^2.2.0)**: Beautiful hand-crafted SVG icons
- **Tabler Icons (^3.31.0)**: Free SVG icons

## Utility Libraries
- **Class Variance Authority (^0.7.1)**: Component variant management
- **clsx (^2.1.1)**: Conditional className utility
- **Tailwind Merge (^2.6.0)**: Merge Tailwind classes intelligently
- **tailwindcss-animate (^1.0.7)**: Animation utilities for Tailwind

## Form & Communication
- **EmailJS (^4.4.1)**: Email service for contact forms
- **React Toastify (^11.0.3)**: Toast notifications
- **React Intersection Observer (^9.16.0)**: Intersection observer hook

## Development Environment
- **Node.js**: JavaScript runtime for development
- **npm/yarn**: Package managers (yarn.lock present)
- **ESLint (^9)**: Code linting with Next.js config
- **PostCSS (^8)**: CSS processing
- **TypeScript (^5)**: Static type checking

## Font System
- **Google Fonts Integration**: Multiple font families
  - Geist Sans & Mono (primary)
  - Merriweather (serif)
  - Smooch Sans (display)
  - Poppins (sans-serif)
- **Next/Font**: Optimized font loading

## Styling System
- **Tailwind CSS**: Utility-first framework
- **CSS Custom Properties**: Theme variables for light/dark mode
- **CSS Modules**: Component-scoped styles when needed
- **Styled Components (^6.1.14)**: CSS-in-JS for complex styling

## Performance & Optimization
- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic with Next.js
- **Adaptive DPR**: Dynamic quality adjustment for 3D scenes
- **Performance Monitoring**: Built-in performance tracking for 3D
- **Lazy Loading**: Components and assets loaded on demand

## Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **WebGL Support**: Required for 3D features
- **ES6+ Features**: Modern JavaScript features used throughout

## Build & Deployment
- **Next.js Build System**: Optimized production builds
- **Static Site Generation**: Pre-rendered pages for performance
- **Vercel Deployment**: Optimized for Vercel platform
- **Environment Variables**: Configuration management

## Development Scripts
```json
{
  "dev": "next dev",
  "build": "next build", 
  "start": "next start",
  "lint": "next lint"
}
```

## Type Definitions
- **@types/node (^20)**: Node.js type definitions
- **@types/react (^19)**: React type definitions
- **@types/react-dom (^19)**: React DOM type definitions
- **@types/three (^0.175.0)**: Three.js type definitions
- **@types/react-icons (^3.0.0)**: React Icons type definitions

## Security Considerations
- **No Backend Dependencies**: Static site with minimal attack surface
- **Form Validation**: Client-side validation with EmailJS
- **Content Security**: No user-generated content
- **HTTPS**: Secure communication for all external services

## Performance Metrics
- **Lighthouse Scores**: Optimized for performance, accessibility, SEO
- **Core Web Vitals**: Optimized loading, interactivity, and visual stability
- **Mobile Performance**: Adaptive rendering for mobile devices
- **3D Performance**: Automatic quality adjustment based on device capabilities 