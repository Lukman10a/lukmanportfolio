# Tech Context: Lukman's Portfolio Website

## Core Technologies
1. **Next.js**: React framework providing server-side rendering, static site generation, and routing
2. **TypeScript**: Strongly typed programming language that builds on JavaScript
3. **Tailwind CSS**: Utility-first CSS framework for rapid UI development
4. **Framer Motion**: Animation library for React
5. **GSAP (GreenSock Animation Platform)**: Professional-grade animation library
6. **Three.js / React Three Fiber**: 3D graphics libraries for WebGL rendering
7. **Lenis**: Smooth scrolling library

## Frontend Architecture
- **React**: Component-based UI library
- **Next.js Pages Router**: File-system based routing
- **CSS Modules / Tailwind**: Component styling
- **Responsive Design**: Mobile-first approach with breakpoints

## Animation Technologies
- **Framer Motion**: Used for UI element animations
- **GSAP**: Used for complex animation sequences
- **CSS Transitions**: Used for simple hover effects
- **Lenis**: Smooth scrolling implementation
- **React Three Fiber**: 3D animations and effects

## Development Environment
- **Node.js**: JavaScript runtime for development
- **npm/yarn**: Package managers
- **ESLint**: Code linting
- **TypeScript**: Static type checking
- **Git**: Version control

## Deployment Strategy
- Static site generation with Next.js
- Potential hosting on Vercel, Netlify, or similar platforms
- Continuous deployment from Git repository

## Dependencies
Major dependencies include:
- next (^15.1.4)
- react (^19.0.0)
- react-dom (^19.0.0)
- typescript (^5)
- tailwindcss (^3.4.1)
- framer-motion (^12.6.3)
- gsap (^3.12.7)
- @react-three/fiber (^9.1.1)
- @react-three/drei (^10.0.5)
- three (^0.175.0)
- lenis (^1.2.3)
- aos (^2.3.4)
- @emailjs/browser (^4.4.1)
- react-toastify (^11.0.3)

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers on iOS and Android
- Responsive design for various screen sizes

## Performance Considerations
- Image optimization through Next.js Image component
- Code splitting for optimized loading
- Minimal use of large libraries
- Efficient animations to prevent layout shifts
- Mobile performance optimizations

## Security Considerations
- No backend/server components requiring traditional security measures
- Form submissions protected against spam
- Static site with minimal attack surface 