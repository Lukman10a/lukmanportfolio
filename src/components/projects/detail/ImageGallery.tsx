import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
  images: string[];
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  handleNextImage: () => void;
  handlePreviousImage: () => void;
  itemVariants: Variants;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  currentImageIndex,
  setCurrentImageIndex,
  handleNextImage,
  handlePreviousImage,
  itemVariants
}) => {
  // Track swipe state
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  
  // Swipe threshold
  const minSwipeDistance = 50;

  // Update current image source when index changes
  useEffect(() => {
    if (images && images.length > 0 && currentImageIndex < images.length) {
      setImgSrc(images[currentImageIndex]);
      setImageError(false); // Reset error state on image change
    }
  }, [images, currentImageIndex]);

  // Handle touch events
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNextImage();
      setDirection(1);
    } else if (isRightSwipe) {
      handlePreviousImage();
      setDirection(-1);
    }
    
    // Reset
    setTouchEnd(0);
    setTouchStart(0);
  };

  // Set initial direction when carousel first loads
  useEffect(() => {
    setDirection(0);
  }, []);

  // Variants for image transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  // Show placeholder when image can't be loaded
  const handleImageError = () => {
    // Mark that we had an error
    setImageError(true);
    
    // Use the placeholder image as fallback
    setImgSrc('/placeholder.jpg');
  };

  if (!images || images.length === 0) {
    return <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">No images available</div>;
  }

  return (
    <motion.div variants={itemVariants} className="space-y-8">
      {/* Main current image with navigation */}
      <div 
        className="relative h-[70vh] sm:h-[50vh] rounded-xl overflow-hidden shadow-lg"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`${currentImageIndex}-${imageError ? 'error' : 'normal'}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            {imgSrc && (
              <Image
                src={imgSrc}
                alt={`Project screenshot ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 639px) 100vw, (max-width: 767px) 80vw, 50vw"
                priority
                onError={handleImageError}
              />
            )}
            {!imgSrc && (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800">
                <span className="text-gray-500 dark:text-gray-400">Image not available</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {images.length > 1 && (
          <>
            <button 
              onClick={() => {
                setDirection(-1);
                handlePreviousImage();
              }}
              className="absolute left-4 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 p-2 sm:p-1 rounded-full shadow-md z-10 hover:bg-opacity-100 transition-all duration-300"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 sm:w-4 sm:h-4 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => {
                setDirection(1);
                handleNextImage();
              }}
              className="absolute right-4 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 p-2 sm:p-1 rounded-full shadow-md z-10 hover:bg-opacity-100 transition-all duration-300"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 sm:w-4 sm:h-4 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
      
      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-3 gap-3 mt-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              onClick={() => {
                setDirection(index > currentImageIndex ? 1 : -1);
                setCurrentImageIndex(index);
              }}
              className={`relative h-24 sm:h-20 rounded-lg overflow-hidden cursor-pointer ${
                index === currentImageIndex 
                  ? "ring-2 ring-[#ff914d] ring-offset-2 dark:ring-offset-gray-900" 
                  : "hover:opacity-80 transition-opacity"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 639px) 33vw, 25vw"
                onError={(e) => { e.currentTarget.src = '/placeholder.jpg'; }}
              />
            </motion.div>
          ))}
        </div>
      )}
      
      {/* Dot Indicators (optional, can show for mobile only) */}
      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2 sm:hidden">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentImageIndex ? 1 : -1);
                setCurrentImageIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? "bg-[#ff914d] scale-110" 
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ImageGallery; 