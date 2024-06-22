import { motion } from "framer-motion";
import Button from "./Button";

export default function HeroSection({ tittle, message }) {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const til = tittle;
  const msg = message;

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className="relative z-10 space-y-8 text-center text-white">
        <motion.h3
          className="load-screen--message"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {til.split("").map((char, index) => (
            <motion.span
              className="mb-6 text-5xl font-bold md:text-7xl lg:text-9xl poppins-bold "
              key={char + "-" + index}
              variants={letter}
            >
              {char}
            </motion.span>
          ))}

          <br />

          {msg.split("").map((word, index) => (
            <motion.span
              className="max-w-md mx-auto mb-10 text-lg text-gray-300 md:text-xl lg:text-2xl ubuntu-bold"
              key={word + "-" + index}
              variants={letter}
            >
              {word}
            </motion.span>
          ))}
        </motion.h3>
        <Button />
      </div>
    </div>
  );
}
