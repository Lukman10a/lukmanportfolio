import { useEffect } from 'react';

interface SmoothScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
  enabled?: boolean;
}

/**
 * Custom hook for smooth scrolling
 */
const useSmoothScroll = ({
  duration = 1000,
  easing = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Exponential easing
  enabled = true,
}: SmoothScrollOptions = {}) => {
  useEffect(() => {
    if (!enabled) return;
    
    let animationFrame: number;
    let startTime: number;
    let startPosition: number;
    let targetPosition: number;
    let isScrolling = false;
    
    // Linear interpolation function
    const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;
    
    const scrollToY = (targetY: number) => {
      if (isScrolling) {
        window.cancelAnimationFrame(animationFrame);
      }
      
      startTime = performance.now();
      startPosition = window.scrollY;
      targetPosition = targetY;
      isScrolling = true;
      
      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easing(progress);
        
        window.scrollTo(0, lerp(startPosition, targetPosition, easedProgress));
        
        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(animateScroll);
        } else {
          isScrolling = false;
        }
      };
      
      animationFrame = window.requestAnimationFrame(animateScroll);
    };
    
    // Handle click events on anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (
        !anchor ||
        !anchor.hash ||
        !anchor.getAttribute('href')?.startsWith('#')
      )
        return;
      
      const targetElement = document.querySelector(anchor.hash);
      if (!targetElement) return;
      
      e.preventDefault();
      
      // Calculate target position with offset for fixed header
      const headerOffset = 80; // Adjust this value according to your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      scrollToY(offsetPosition);
      
      // Update URL without scrolling
      history.pushState(null, '', anchor.hash);
    };
    
    // Apply smooth scrolling to all anchor links
    document.addEventListener('click', handleClick);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick);
      if (isScrolling) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [duration, easing, enabled]);
};

export default useSmoothScroll; 