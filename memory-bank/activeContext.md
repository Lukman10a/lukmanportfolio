# Active Context - Lukman's Portfolio Website

## Current State (December 2024)

### Core Architecture
- **Framework**: Next.js 15 with Pages Router (not App Router)
- **React**: Version 19 with TypeScript 5
- **Styling**: Tailwind CSS with custom design system
- **3D Graphics**: React Three Fiber with adaptive performance monitoring
- **Animations**: Framer Motion + GSAP + Lenis smooth scrolling
- **State Management**: Local state with React hooks

### Key Components Analysis

#### Homepage (`src/pages/index.tsx`)
- **Enhanced Hero Section**: Modern hero with typewriter effect and text loops
- **3D Project Scene**: Interactive 3D scene with texture transitions
- **Project List**: Hover-activated project navigation
- **Smooth Scrolling**: Lenis integration for fluid navigation

#### Enhanced Hero (`src/components/EnhancedHero.tsx`)
- **Typewriter Animation**: Intersection observer-triggered typing effect
- **Text Loop**: Animated text cycling with multiple presets
- **Responsive Design**: Mobile-first approach with custom breakpoints
- **Background Effects**: Gradient overlays and decorative patterns

#### 3D Scene System (`src/components/projects/scene.tsx`)
- **Performance Monitoring**: Adaptive DPR based on device capabilities
- **Mobile Optimization**: Lower initial DPR for mobile devices
- **Suspense Boundaries**: Proper loading states for 3D content
- **SSR Handling**: Client-side mounting to prevent hydration issues

#### 3D Model (`src/components/projects/model.tsx`)
- **Texture Management**: Dynamic texture loading and transitions
- **Shader Effects**: Custom vertex/fragment shaders for visual effects
- **Mouse Interaction**: Smooth mouse tracking with performance optimization
- **Flash Prevention**: Proper initialization to prevent texture flashing

#### Project Display Components
- **MarkazulBayaanProject**: Specialized display for Islamic education projects
- **MobileAppDisplay**: Mobile app showcase with device mockups
- **StandardProjectDisplay**: Generic project display for web applications
- **Responsive Gallery**: Image galleries with navigation controls

#### Navigation System (`src/components/navBar/index.tsx`)
- **Mobile Hidden**: Navbar hidden on screens ≤639px (`sm:hidden`)
- **Desktop Navigation**: Full navigation on larger screens
- **Sheet Menu**: Mobile hamburger menu with accordion navigation
- **Scroll Lock**: Proper scroll management for mobile menu

### Data Architecture

#### Project Data (`data.ts`)
- **Two Interfaces**: `Project` (simple) and `Projects` (detailed)
- **Rich Content**: Images, descriptions, tech stacks, client info
- **Slug Generation**: SEO-friendly URL generation
- **Type Safety**: Comprehensive TypeScript interfaces

#### Project Types
1. **Teverse**: Cloud computing platform
2. **Cloude Code**: Cloud-based IDE
3. **At-Taasil**: Islamic education platform
4. **Markazul Bayaan**: Online Islamic school (specialized display)
5. **Consology**: Construction management platform
6. **SunnahHive**: Islamic knowledge platform
7. **LearnSmart**: Mobile learning app (specialized display)

### Animation System

#### Typewriter Component (`src/components/ui/animated/typewriter.tsx`)
- **Intersection Observer**: Performance-optimized triggering
- **Configurable Timing**: Customizable delay and completion callbacks
- **Text Alignment**: Flexible text positioning options

#### Text Loop Component (`src/components/ui/animated/textLoop.tsx`)
- **Multiple Presets**: Fade, slide, bounce, scale, rotate, zoom, flip, blur, swing
- **Configurable Intervals**: Customizable timing between transitions
- **Smooth Transitions**: Framer Motion-powered animations

#### Enhanced Button (`src/components/ui/EnhancedButton.tsx`)
- **Multiple Variants**: Primary and outline styles
- **Icon Support**: Flexible icon positioning
- **Hover Effects**: Scale and color transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation

### Performance Optimizations

#### 3D Performance
- **Adaptive DPR**: Device capability-based rendering quality
- **Texture Optimization**: Proper mipmap and filter settings
- **Frame Rate Control**: Throttled updates for smooth performance
- **Memory Management**: Proper texture cleanup and disposal

#### Animation Performance
- **Intersection Observer**: Animations only trigger when visible
- **Throttled Updates**: Reduced frequency for smooth performance
- **Optimized Spring Settings**: Balanced tension and friction values
- **GPU Optimization**: Minimal uniform updates

#### Mobile Optimization
- **Lower Initial DPR**: Reduced quality for mobile devices
- **Touch Event Handling**: Proper mobile interaction management
- **Responsive Scaling**: Device-specific 3D model scaling
- **Performance Monitoring**: Automatic quality adjustment

### Styling System

#### Tailwind Configuration (`tailwind.config.ts`)
- **Custom Breakpoints**: Mobile-first responsive design
- **Brand Colors**: #ff914d (brand orange)
- **Custom Animations**: Reveal, marquee, loading effects
- **Font System**: Geist Sans/Mono with fallbacks

#### Global Styles (`src/styles/globals.css`)
- **CSS Variables**: Theme-aware color system
- **Dark Mode**: Seamless light/dark mode switching
- **Custom Scrollbar**: Styled scrollbar for better UX
- **Smooth Transitions**: Consistent animation timing

### Utility Functions

#### Slug Generation (`src/utils/slug.ts`)
- **SEO-Friendly URLs**: Clean URL generation for projects
- **Character Filtering**: Proper special character handling
- **Consistent Formatting**: Standardized URL structure

#### Utility Helpers (`src/lib/utils.ts`)
- **Class Merging**: Tailwind class optimization with clsx and tailwind-merge
- **Type Safety**: Proper TypeScript integration

### Custom Hooks

#### Smooth Scroll (`src/hooks/useSmoothScroll.ts`)
- **Custom Easing**: Exponential easing for natural feel
- **Anchor Link Handling**: Smooth scrolling for internal links
- **Header Offset**: Proper positioning with fixed header

#### Scroll Lock (`src/hooks/useScrollLock.ts`)
- **Mobile Menu Support**: Prevents background scrolling
- **Width Reflow Prevention**: Maintains layout during lock
- **Proper Cleanup**: Restores original styles on unmount

#### Isomorphic Layout Effect (`src/hooks/useIsomorphic.ts`)
- **SSR Compatibility**: Proper server/client rendering
- **Performance**: Optimized for layout effects

### Current Issues & Recent Fixes

#### Fixed Issues
1. **SSR Hydration**: Proper client-side mounting for 3D components
2. **Texture Flash**: Fixed initial texture loading and opacity transitions
3. **Mobile Navigation**: Hidden navbar on mobile screens
4. **Performance**: Optimized 3D rendering and animation performance
5. **Type Safety**: Comprehensive TypeScript coverage

#### Performance Optimizations
1. **3D Scene**: Adaptive DPR and performance monitoring
2. **Animation System**: Intersection observer optimization
3. **Mobile Experience**: Touch event handling and responsive scaling
4. **Memory Management**: Proper texture cleanup and disposal

### Development Status

#### Completed Features
- ✅ Modern hero section with animations
- ✅ Interactive 3D project showcase
- ✅ Responsive project navigation
- ✅ Specialized project displays
- ✅ Mobile-optimized navigation
- ✅ Performance monitoring and optimization
- ✅ Dark/light theme support
- ✅ Smooth scrolling and animations

#### Technical Excellence
- ✅ TypeScript coverage throughout
- ✅ Performance optimization for 3D content
- ✅ Mobile-first responsive design
- ✅ Accessibility considerations
- ✅ Modern React patterns and hooks
- ✅ Clean component architecture

### Next Steps
The portfolio is in a highly polished state with advanced features and excellent performance. The codebase demonstrates sophisticated frontend development skills with modern technologies and best practices. 