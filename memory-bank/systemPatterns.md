# System Patterns: Lukman's Portfolio Website

## Architecture Overview
The portfolio website follows a component-based architecture using Next.js with the Pages Router. The application is structured to maximize reusability, maintainability, and performance with a focus on modern animations and 3D interactions.

## Directory Structure
- `/src/pages`: Contains route components for each page
  - `index.tsx`: Main home page with hero and projects sections
  - `_app.tsx`: Global app wrapper with theme, fonts, and navigation
  - `_document.tsx`: Custom document for HTML structure
  - `about.tsx`, `contact.tsx`, `blog.tsx`, `reviews.tsx`: Individual pages
  - `/projects/[id].tsx`: Dynamic project detail pages
  - `/api`: API routes (if needed)
- `/src/components`: Reusable UI components
  - `/ui`: Basic UI components and animations
    - `/animated`: Specialized animation components (typewriter, textLoop, preloader, etc.)
  - `/projects`: Project-related components (scene, models, project displays)
  - `/navBar`: Navigation components (AnimatedNav)
  - Individual components: hero, footer, form, etc.
- `/public/assets`: Static assets like images and SVGs
- `/src/utils`: Utility functions (slug generation, etc.)
- `/src/styles`: Global styles and Tailwind configurations
- `/src/hooks`: Custom React hooks (useSmoothScroll)
- `/src/lib`: Generic library code (utils for class merging)
- `/data.ts`: Project data and interfaces (root level)
- `/memory-bank`: Documentation and context files

## Design Patterns

### 1. Component Composition
- Building complex UIs from smaller, reusable components
- Specialized components for different project types (MarkazulBayaanProject, MobileAppDisplay, StandardProjectDisplay)
- Animated components with consistent API patterns

### 2. Animation Architecture
- **Text Animations**: Typewriter effects with intersection observer triggers
- **Page Transitions**: Framer Motion for smooth page and component transitions
- **3D Integration**: React Three Fiber with performance monitoring
- **Scroll Animations**: Lenis for smooth scrolling with GSAP integration
- **Hover Effects**: Magnetic and enhanced button interactions

### 3. Theme System
- CSS custom properties for light/dark mode
- Tailwind CSS with custom color scheme (#f8f4ec light, #121212 dark)
- Brand color: #ff914d (orange)
- Font system: Geist Sans/Mono, Merriweather, Smooch Sans, Poppins

### 4. Responsive Design
- Mobile-first approach with custom breakpoints
- Performance optimizations for mobile (adaptive DPR in 3D scenes)
- Touch event handling for mobile interactions

### 5. Data Management
- Static data structure in `data.ts` with TypeScript interfaces
- Project data with detailed information (images, tech stack, descriptions)
- Slug-based routing for SEO-friendly URLs

## State Management
- Local component state using React's `useState` and `useEffect`
- Props for component communication
- Context for theme management
- No complex global state management needed

## Routing & Navigation
- Next.js Pages Router for file-based routing
- Dynamic routes for project details (`/projects/[id]`)
- Animated navigation with full-screen mobile menu
- Smooth scrolling between sections

## Performance Considerations

### 3D Performance
- Adaptive DPR (Device Pixel Ratio) based on device capabilities
- Performance monitoring with automatic quality adjustment
- Suspense boundaries for 3D model loading
- Mobile-optimized rendering settings

### Animation Performance
- Intersection Observer for triggering animations only when visible
- Framer Motion with optimized animation variants
- GSAP for complex animation sequences
- CSS transforms for hardware acceleration

### Loading & UX
- Preloader with 3-second delay
- Lazy loading for components and assets
- Smooth transitions between pages
- Touch event optimization for mobile

## Component Relationships

### Layout Components
- `_app.tsx`: Global wrapper with navigation and footer
- `AnimatedNav`: Responsive navigation with full-screen mobile menu
- `Footer`: Site footer with links and information

### Page Components
- `EnhancedHero`: Main landing section with animated text
- `Projects`: Project listing with 3D scene integration
- Dynamic project pages with specialized displays

### Animation Components
- `Typewriter`: Text typing animation with intersection observer
- `TextLoop`: Cycling text animation
- `Preloader`: Loading animation
- `Magnetic`: Magnetic hover effects
- Various other animated UI elements

### 3D Components
- `Scene`: Three.js canvas wrapper with performance monitoring
- `Model`: 3D models for project visualization
- Adaptive rendering based on device capabilities

## Integration Patterns

### External Services
- EmailJS for contact form functionality
- Google Fonts for typography
- React Icons for iconography
- Lucide React for modern icons

### Development Tools
- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Class Variance Authority for component variants

## Error Handling & Fallbacks
- Suspense boundaries for 3D content
- Loading states for dynamic content
- Graceful fallbacks for missing projects
- Performance degradation handling for 3D scenes 