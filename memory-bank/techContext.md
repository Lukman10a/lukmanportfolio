# Tech Context - Lukman's Portfolio Website

## Technology Stack

### Core Framework
- **Next.js**: Version 15.1.4 with Pages Router (not App Router)
- **React**: Version 19.0.0 with latest features and hooks
- **TypeScript**: Version 5 with comprehensive type coverage
- **Node.js**: Latest LTS version for development

### Styling & Design
- **Tailwind CSS**: Version 3.4.1 with custom configuration
- **Custom Design System**: Brand colors, animations, and responsive breakpoints
- **CSS Variables**: Theme-aware color system for dark/light mode
- **Custom Animations**: Keyframes and transitions for enhanced UX

### 3D Graphics & Animation
- **React Three Fiber**: Version 9.1.1 for 3D graphics
- **Three.js**: Version 0.175.0 for 3D rendering
- **@react-three/drei**: Version 10.0.5 for 3D utilities
- **@react-spring/three**: Version 9.7.5 for 3D animations
- **Custom Shaders**: Vertex and fragment shaders for visual effects

### Animation Libraries
- **Framer Motion**: Version 12.6.3 for React animations
- **GSAP**: Version 3.12.7 for advanced animations
- **@gsap/react**: Version 2.1.2 for React integration
- **Lenis**: Version 1.2.3 for smooth scrolling
- **React Intersection Observer**: Version 9.16.0 for performance optimization

### UI Components
- **Radix UI**: Accordion, Dialog, Scroll Area, Icons
- **Lucide React**: Version 0.471.1 for icons
- **React Icons**: Version 5.5.0 for additional icons
- **Tabler Icons**: Version 3.31.0 for specialized icons

### Development Tools
- **ESLint**: Version 9 with Next.js configuration
- **PostCSS**: Version 8 for CSS processing
- **Tailwind CSS Animate**: Version 1.0.7 for animations
- **Class Variance Authority**: Version 0.7.1 for component variants

### Utility Libraries
- **Clsx**: Version 2.1.1 for conditional classes
- **Tailwind Merge**: Version 2.6.0 for class optimization
- **React Motion**: Version 0.5.2 for physics-based animations
- **React Toastify**: Version 11.0.3 for notifications

### Additional Dependencies
- **@emailjs/browser**: Version 4.4.1 for email functionality
- **@heroicons/react**: Version 2.2.0 for icons
- **@next/font**: Version 14.2.15 for font optimization
- **AOS**: Version 2.3.4 for scroll animations
- **Styled Components**: Version 6.1.14 for styled components

## Development Environment

### Build Configuration
```typescript
// next.config.ts
const nextConfig = {
  // Custom Next.js configuration
  experimental: {
    // React 19 features
  },
  images: {
    // Image optimization settings
  }
};
```

### TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Tailwind Configuration
```typescript
// tailwind.config.ts
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': { max: '1400px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      '2md': { max: '950px' },
      md: { max: '767px' },
      sm: { max: '639px' }
    },
    extend: {
      colors: {
        brand: "#ff914d",
        // Theme-aware colors
      },
      keyframes: {
        // Custom animations
      },
      animation: {
        // Animation utilities
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
```

## Technical Architecture

### File Structure
```
src/
├── components/
│   ├── ui/
│   │   ├── animated/
│   │   │   ├── typewriter.tsx
│   │   │   ├── textLoop.tsx
│   │   │   └── ...
│   │   ├── button.tsx
│   │   ├── EnhancedButton.tsx
│   │   └── ...
│   ├── projects/
│   │   ├── detail/
│   │   │   ├── MarkazulBayaanProject.tsx
│   │   │   ├── MobileAppDisplay.tsx
│   │   │   └── StandardProjectDisplay.tsx
│   │   ├── model.tsx
│   │   ├── scene.tsx
│   │   ├── shader.ts
│   │   └── ...
│   ├── navBar/
│   │   ├── index.tsx
│   │   ├── data.ts
│   │   └── ...
│   └── ...
├── hooks/
│   ├── useSmoothScroll.ts
│   ├── useScrollLock.ts
│   ├── useIsomorphic.ts
│   └── ...
├── lib/
│   ├── utils.ts
│   ├── types.ts
│   └── ...
├── pages/
│   ├── index.tsx
│   ├── projects/
│   │   └── [id].tsx
│   └── ...
├── styles/
│   └── globals.css
└── utils/
    └── slug.ts
```

### Key Technical Features

#### 3D Graphics System
- **React Three Fiber**: 3D scene management
- **Performance Monitoring**: Adaptive DPR based on device capabilities
- **Custom Shaders**: Vertex and fragment shaders for visual effects
- **Texture Management**: Dynamic loading and transition system
- **Mobile Optimization**: Lower DPR and responsive scaling

#### Animation System
- **Framer Motion**: React animations with performance optimization
- **GSAP**: Advanced animations and timeline control
- **Lenis**: Smooth scrolling with performance monitoring
- **Intersection Observer**: Performance-optimized animation triggering
- **Spring Animations**: Physics-based animations for natural movement

#### Responsive Design
- **Mobile-First**: Progressive enhancement approach
- **Custom Breakpoints**: Tailored responsive design system
- **Adaptive Scaling**: Device-specific 3D model scaling
- **Touch Optimization**: Mobile-specific interactions and gestures

#### Performance Optimization
- **Adaptive Rendering**: Device capability-based quality adjustment
- **Throttled Updates**: Performance-optimized frame updates
- **Memory Management**: Proper resource cleanup and disposal
- **Bundle Optimization**: Efficient code splitting and loading
- **SSR Compatibility**: Proper server-side rendering support

#### Type Safety
- **TypeScript 5**: Latest TypeScript features and improvements
- **Comprehensive Types**: Full type coverage throughout codebase
- **Interface Definitions**: Well-defined data structures
- **Component Props**: Type-safe component interfaces
- **Utility Types**: Type-safe utility functions

## Development Workflow

### Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build", 
    "start": "next start",
    "lint": "next lint"
  }
}
```

### Development Process
1. **Hot Reloading**: Fast development iteration with Next.js
2. **Type Checking**: Real-time TypeScript error detection
3. **Linting**: ESLint with Next.js configuration
4. **Build Optimization**: Efficient production builds
5. **Performance Monitoring**: Built-in performance analysis

### Code Quality
- **ESLint**: Code quality and consistency
- **TypeScript**: Type safety and developer experience
- **Prettier**: Code formatting (implicit)
- **Component Architecture**: Clean, reusable component structure
- **Performance Monitoring**: Built-in performance analysis

## Browser Support

### Modern Browsers
- **Chrome**: Latest version
- **Firefox**: Latest version  
- **Safari**: Latest version
- **Edge**: Latest version

### Requirements
- **JavaScript**: Required for full functionality
- **WebGL**: Required for 3D features (graceful degradation)
- **CSS Grid/Flexbox**: Required for layout
- **Intersection Observer**: Required for animations (polyfill available)

### Mobile Support
- **iOS Safari**: Latest version
- **Chrome Mobile**: Latest version
- **Samsung Internet**: Latest version
- **Touch Events**: Full touch support
- **Responsive Design**: Mobile-first approach

## Performance Characteristics

### 3D Performance
- **Adaptive DPR**: 0.8 to 2.0 based on device capabilities
- **Performance Monitoring**: Automatic quality adjustment
- **Memory Management**: Proper texture cleanup
- **Mobile Optimization**: Lower initial DPR for mobile devices

### Animation Performance
- **Intersection Observer**: Animations only trigger when visible
- **Throttled Updates**: Reduced frequency for smooth performance
- **GPU Optimization**: Minimal uniform updates
- **Spring Optimization**: Balanced tension and friction values

### Loading Performance
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component optimization
- **Font Optimization**: Next.js font optimization
- **Bundle Analysis**: Built-in bundle analysis tools

## Security Considerations

### Client-Side Security
- **Type Safety**: TypeScript prevents runtime errors
- **Input Validation**: Proper form validation
- **XSS Prevention**: React's built-in XSS protection
- **CSP**: Content Security Policy support

### Development Security
- **Environment Variables**: Proper environment variable handling
- **API Security**: Secure API endpoint design
- **Authentication**: Proper authentication patterns
- **Authorization**: Role-based access control

## Deployment

### Vercel Deployment
- **Automatic Deployments**: Git-based deployment
- **Preview Deployments**: Pull request previews
- **Performance Monitoring**: Built-in analytics
- **Edge Functions**: Serverless function support

### Build Optimization
- **Static Generation**: Pre-rendered pages for performance
- **Image Optimization**: Automatic image optimization
- **Bundle Analysis**: Built-in bundle analysis
- **Performance Monitoring**: Real-time performance metrics

This technical stack represents a modern, high-performance web application with advanced 3D graphics, sophisticated animations, and excellent developer experience. 