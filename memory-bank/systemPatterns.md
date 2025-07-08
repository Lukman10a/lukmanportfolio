# System Patterns - Lukman's Portfolio Website

## Architecture Overview

### Technology Stack
- **Frontend**: React 19 + Next.js 15 + TypeScript 5
- **Styling**: Tailwind CSS with custom design system
- **3D Graphics**: React Three Fiber with adaptive performance
- **Animations**: Framer Motion + GSAP + Lenis smooth scrolling
- **State Management**: Local state with React hooks
- **Build Tool**: Next.js with custom configuration

### Core Architectural Patterns

#### 1. Component Architecture

##### Specialized Display Pattern
```typescript
// Different components for different project types
- MarkazulBayaanProject: Islamic education projects
- MobileAppDisplay: Mobile applications  
- StandardProjectDisplay: Web applications
- TeverseProjectDisplay: Cloud platforms
```

##### Animation Component Pattern
```typescript
// Reusable animation components with intersection observer
- Typewriter: Intersection observer + completion callbacks
- TextLoop: Multiple animation presets
- EnhancedButton: Hover effects with icon support
- Magnetic: Interactive hover effects
```

#### 2. 3D Graphics Architecture

##### Performance Monitoring Pattern
```typescript
// Adaptive performance with automatic quality adjustment
<PerformanceMonitor 
  onDecline={() => setDpr(0.8)} 
  onIncline={() => setDpr(Math.min(dpr + 0.2, 2))}
>
  <AdaptiveDpr pixelated />
  <Model activeMenu={activeMenu} />
</PerformanceMonitor>
```

##### Texture Management Pattern
```typescript
// Dynamic texture loading with flash prevention
const uniforms = useRef<MaterialUniforms>({
  uTexture: { value: null }, // Start with no texture
  uOpacity: { value: 0 }, // Start with opacity 0
});

// Smooth texture transitions
useEffect(() => {
  const targetTexture = activeMenu !== null ? textures[activeMenu] : null;
  const targetOpacity = activeMenu !== null ? 1 : 0;
  // Animated transitions with proper cleanup
}, [activeMenu, isLoaded, textures]);
```

#### 3. Animation System Patterns

##### Intersection Observer Pattern
```typescript
// Performance-optimized animation triggering
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.1,
});

useEffect(() => {
  if (inView) {
    controls.start("visible");
  }
}, [inView, controls]);
```

##### Spring Animation Pattern
```typescript
// Optimized spring animations for 3D movement
const [springs, api] = useSpring(() => ({
  position: [0, 0, 0],
  config: { 
    mass: 1, 
    tension: 210,
    friction: 40,
    precision: 0.005
  },
}));
```

#### 4. Responsive Design Patterns

##### Mobile-First Breakpoint System
```typescript
// Custom breakpoints in Tailwind config
screens: {
  '2xl': { max: '1400px' },
  xl: { max: '1279px' },
  lg: { max: '1023px' },
  '2md': { max: '950px' },
  md: { max: '767px' },
  sm: { max: '639px' }
}
```

##### Adaptive 3D Scaling Pattern
```typescript
// Device-specific 3D model scaling
const getResponsiveScale = useMemo(() => {
  if (dimension.width < 768) {
    return 0.15; // Mobile
  } else if (dimension.width < 1024) {
    return 0.18; // Tablet
  } else {
    return 0.225; // Desktop
  }
}, [dimension.width]);
```

#### 5. Data Management Patterns

##### Static Data Pattern
```typescript
// Type-safe project data structure
export interface Projects {
  id: string;
  title: string;
  images: string[];
  description: string;
  techStack: string[];
  client: string;
  year: string;
  link: string;
  coursesLink?: string;
}
```

##### Slug Generation Pattern
```typescript
// SEO-friendly URL generation
export const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};
```

#### 6. Performance Optimization Patterns

##### Throttled Updates Pattern
```typescript
// Performance-optimized frame updates
useFrame(() => {
  if (!isLoaded || !materialRef.current) return;
  
  const { x, y } = mouse;
  const smoothx = smoothMouse.x.get();
  const smoothy = smoothMouse.y.get();
  
  // Only update if there's meaningful change
  if (Math.abs(newX - smoothx) > 0.001 || Math.abs(newY - smoothy) > 0.001) {
    // Update uniforms
  }
});
```

##### Memory Management Pattern
```typescript
// Proper texture cleanup
useEffect(() => {
  return () => {
    // Cleanup textures to prevent memory leaks
    textures.forEach(texture => {
      if (texture && texture.dispose) {
        texture.dispose();
      }
    });
  };
}, []);
```

#### 7. Navigation Patterns

##### Mobile Navigation Pattern
```typescript
// Mobile-hidden navigation with sheet menu
<nav className="relative z-50 font-inter sm:hidden">
  {/* Desktop navigation */}
  <div className="sm:hidden flex gap-6">
    {/* Desktop links */}
  </div>
  
  {/* Mobile sheet menu */}
  <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
    {/* Mobile menu content */}
  </Sheet>
</nav>
```

##### Smooth Scrolling Pattern
```typescript
// Custom smooth scrolling with Lenis
useEffect(() => {
  const lenis = new Lenis();
  
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}, []);
```

#### 8. Theme System Patterns

##### CSS Variables Pattern
```css
:root {
  --background: #f8f4ec;
  --foreground: #171717;
  --brand: #ff914d;
}

.dark {
  --background: #121212;
  --foreground: #f8f4ec;
  --brand: #ff914d;
}
```

##### Tailwind Integration Pattern
```typescript
// Brand color integration
colors: {
  brand: "#ff914d",
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
}
```

#### 9. Error Handling Patterns

##### Graceful Fallback Pattern
```typescript
// Image error handling
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = "/placeholder.jpg";
};

// Loading states
if (!isLoaded) {
  return <div>Loading 3D Scene...</div>;
}
```

##### SSR Compatibility Pattern
```typescript
// Client-side mounting for 3D components
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) {
  return <div>Loading...</div>;
}
```

#### 10. Custom Hook Patterns

##### Isomorphic Hook Pattern
```typescript
// SSR-compatible layout effects
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
```

##### Scroll Lock Pattern
```typescript
// Mobile menu scroll management
const { lock, unlock } = useScrollLock({
  autoLock: false,
  lockTarget: "#scrollable",
});

useEffect(() => {
  if (activeItem) {
    lock();
  } else {
    unlock();
  }
}, [activeItem, lock, unlock]);
```

### Design Patterns Summary

#### Component Patterns
- **Specialized Components**: Different displays for different project types
- **Reusable Animations**: Modular animation components
- **Performance Components**: Optimized 3D and animation components
- **Responsive Components**: Mobile-first component design

#### State Management Patterns
- **Local State**: React hooks for component state
- **Performance State**: Adaptive rendering state management
- **Animation State**: Intersection observer state management
- **Navigation State**: Mobile menu state management

#### Performance Patterns
- **Adaptive Rendering**: Device capability-based quality adjustment
- **Throttled Updates**: Performance-optimized frame updates
- **Memory Management**: Proper resource cleanup
- **Intersection Observer**: Performance-optimized animations

#### Responsive Patterns
- **Mobile-First**: Progressive enhancement approach
- **Adaptive Scaling**: Device-specific 3D model scaling
- **Custom Breakpoints**: Tailored responsive design
- **Touch Optimization**: Mobile-specific interactions

#### Animation Patterns
- **Intersection Observer**: Performance-optimized triggering
- **Spring Animations**: Smooth, natural movement
- **Shader Effects**: Custom 3D visual effects
- **Smooth Scrolling**: Fluid navigation experience

### Technical Excellence Patterns

#### Type Safety
- **Comprehensive TypeScript**: Full type coverage
- **Interface Definitions**: Well-defined data structures
- **Component Props**: Type-safe component interfaces
- **Utility Types**: Type-safe utility functions

#### Performance Optimization
- **Adaptive Quality**: Device capability-based rendering
- **Memory Management**: Proper resource cleanup
- **Throttled Updates**: Performance-optimized animations
- **Bundle Optimization**: Efficient code splitting

#### Accessibility
- **ARIA Labels**: Proper accessibility markup
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Semantic HTML structure
- **Focus Management**: Proper focus handling

#### Modern Development
- **React 19**: Latest React features and patterns
- **Next.js 15**: Modern Next.js with Pages Router
- **TypeScript 5**: Latest TypeScript features
- **Modern Hooks**: Custom hooks and best practices

This architecture demonstrates sophisticated frontend development with advanced 3D graphics, performance optimization, and modern development practices. 