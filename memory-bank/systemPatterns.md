# System Patterns: Lukman's Portfolio Website

## Architecture Overview
The portfolio website follows a component-based architecture using Next.js with the Pages Router. The application is structured to maximize reusability, maintainability, and performance.

## Directory Structure
- `/src/pages`: Contains route components for each page
- `/src/components`: Reusable UI components
  - `/ui`: Basic UI components and animations
  - `/projects`: Project-related components
  - `/navBar`: Navigation components
- `/public/assets`: Static assets like images and SVGs
- `/src/utils`: Utility functions
- `/src/styles`: Global styles and Tailwind configurations
- `/src/hooks`: Custom React hooks
- `/src/lib`: Generic library code

## Design Patterns
1. **Component Composition**: Building complex UIs from smaller, reusable components
2. **Container/Presentational Pattern**: Separating data fetching and state management from presentation
3. **Custom Hooks**: Extracting common stateful logic into reusable custom hooks
4. **Modular CSS**: Using Tailwind utility-first approach for styling
5. **Responsive Design**: Mobile-first approach with responsive breakpoints
6. **Animated Interactions**: Using Framer Motion, GSAP, and custom animations for enhanced UX
7. **3D Elements**: Using Three.js/React Three Fiber for 3D models and experiences

## State Management
- Local component state using React's `useState` and `useEffect`
- Context API for global state management when necessary
- Props for component communication

## Routing
- Next.js Pages Router for page-based routing
- Dynamic routes for project details pages

## Performance Considerations
1. **Image Optimization**: Using Next.js image optimization
2. **Code Splitting**: Automatic code splitting provided by Next.js
3. **Smooth Animations**: Using Lenis for smooth scrolling
4. **Lazy Loading**: Components and assets loaded only when needed
5. **Responsive Design**: Performance optimizations for mobile devices

## Animation Architecture
1. **Text Animations**: Custom typewriter effects and text loops
2. **Scroll-based Animations**: Effects triggered by scroll position
3. **Hover Effects**: Enhanced interactions on hover
4. **3D Scene**: Three.js integration for project visualization

## Component Relationships
- **Layout Components**: Provide structure and consistent styling
- **UI Components**: Basic building blocks for interfaces
- **Section Components**: Page-specific sections like Hero, Projects, About
- **Animation Components**: Specialized components for animated effects
- **Integration Components**: Connect with external services (e.g., contact form) 