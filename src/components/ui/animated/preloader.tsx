import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 30);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjusted duration for smoother transition

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed flex flex-col justify-end inset-0 bg-preloader-gradient z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }} // Slow fade-out
        >
          <div className=" text-white text-xl">
            {/* <Image
              src="/logo.png"
              alt="Logo"
              className="mx-auto w-20 h-20"
              width={100}
              height={100}
            /> */}
            {/* <p className="text-white text-xl font-semibold">
              Loading Your Experience...
            </p> */}
          </div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className=" space-x-2 text-white text-[200px] font-bold font-pop"
          >
            <motion.span
              key={count}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.2 }}
              className="text-glow"
            >
              {count}
            </motion.span>
            <motion.span
              className="text-4xl font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              %
            </motion.span>
          </motion.div>
          <motion.div
            className="w-full h-4 rounded-full overflow-hidden"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
            style={{ transformOrigin: "left center" }}
          >
            <div className="w-full h-full bg-black" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
