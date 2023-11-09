import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const animationDuration = 1; // Specify the duration in seconds
  const [playAnimation, setPlayAnimation] = useState(true);

  useEffect(() => {
    // Automatically disable the animation after it has played once
    if (playAnimation) {
      const timer = setTimeout(() => {
        setPlayAnimation(false);
      }, animationDuration * 900); // Convert seconds to milliseconds

      return () => clearTimeout(timer);
    }
  }, [playAnimation]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] ">
          <div className="hidden md:block absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]" />
        </div>

        <div className="lg:w-5/12 space-y-8">
          <span className="f-center">
            <span className="block w-14 mb-2 border-b-2 border-gray-600" />
          </span>
          {playAnimation ? (
            <motion.h1
              initial={{ opacity: 0, y: -50, filter: "blur(9px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: animationDuration }}
              className="text-4xl font-bold md:text-6xl shark:text-white"
            >
              Built in <br /> Your Way but with our Expert Approach
            </motion.h1>
          ) : (
            <h1 className="text-4xl font-bold md:text-6xl shark:text-white">
              Built in <br /> Your Way but with our Expert Approach
            </h1>
          )}

          <span className="flex justify-end">
            <span className="block w-14 mb-2 border-b-2 border-gray-600" />
          </span>
          <p className="text-[16px] text-gray-700 shark:text-gray-300 text-center flex justify-center focus-in-expand">
            Innovative Solutions | Software Development | Digital Marketing 
          </p>
        </div>
      </div>
    </>
  );
}
