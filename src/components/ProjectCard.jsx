import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div>
      <div
        className={`lg:p-10 px-5 py-5  flex flex-col justify-center items-center rounded-3xl bg-[${project.bgcolor}]`}
      >
        <motion.div className="project-card">
          <div className="image-carousel relative w-[80vw] mx-auto h-60 lg:h-[30rem] lg:w-[45rem] overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImage}
                src={project.images[currentImage]}
                alt={project.title}
                className="absolute object-cover w-full h-full rounded-lg "
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
        {/* Dots */}
        <div className="flex justify-center mt-4">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-2 w-2 rounded-full mx-1 bg-gray-300 `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
