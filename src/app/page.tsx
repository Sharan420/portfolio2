"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import { motion, useAnimate, stagger } from "framer-motion";
import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const page = () => {
  const { theme } = useTheme();
  const [scope, animate] = useAnimate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  useEffect(() => {
    if (sessionStorage.getItem("isLoaded") === "true" || isLoaded) {
      setIsLoaded(true);
    }
    const animations = async () => {
      if (!isLoaded) {
        try {
          await animate(".loader", { opacity: 1 }, { duration: 0.4 });
          await animate(".loader", { opacity: 0 }, { duration: 0.5, delay: 2 });
        } catch {}
      }
      await animate(
        ".name",
        { opacity: 1, y: 0 },
        {
          duration: 0.8,
          ease: "easeIn",
        }
      );
      await animate(
        ".description",
        { opacity: 1, y: 0, filter: "blur(0px)" },
        {
          duration: 0.1,
          type: "spring",
          stiffness: 50,
          delay: stagger(0.05),
        }
      );
      await animate(
        ".wv",
        { opacity: 1, filter: "blur(0px)" },
        { duration: 0.5 }
      );
      await animate(".resumebutton", { opacity: 1 }, { duration: 0.5 });
      animate(".navbar", { y: 0 }, { duration: 0.4, ease: "easeIn" });
      await animate(".navbar", { filter: "blur(0px)" }, { duration: 0.5 });
      sessionStorage.setItem("isLoaded", "true");
    };
    animations();
  }, []);

  const description =
    "Engineer into breaking stuff down, building web vibes, and vibing with design sometimes.";
  const words = description.split(" ");

  return (
    <div
      className='min-h-screen w-full flex flex-col items-center justify-center px-4 bg-backgroundd'
      ref={scope}
    >
      {!isLoaded && <Loader />}
      <Navbar isHome={true} />
      <div className='flex flex-col w-full max-w-3xl justify-center items-center gap-4'>
        <div>
          <motion.span
            className={`name text-6xl font-bold inline-block mr-4`}
            initial={{ opacity: 0 }}
          >
            Sharan{" "}
          </motion.span>
          <motion.span
            className={`name text-6xl font-bold inline-block`}
            initial={{ opacity: 0 }}
          >
            Suri
          </motion.span>
        </div>
        <p
          suppressHydrationWarning
          className={cn(
            "text-sm text-center whitespace-pre-line flex flex-row gap-1 flex-wrap w-sm justify-center",
            theme === "light" ? "font-medium" : "font-thin"
          )}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className='description'
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            >
              {word}
            </motion.span>
          ))}
        </p>

        <motion.p
          className='wv font-medium text-base w-1/2 text-center'
          initial={{ opacity: 0, filter: "blur(2px)" }}
        >
          <motion.span
            layout
            className='inline-block mr-1 relative cursor-pointer group'
            whileHover='hover'
          >
            Fullstack{" "}
            <motion.span
              className='absolute bottom-0 left-0 w-0 h-[1px] bg-primary'
              variants={{
                hover: {
                  width: "100%",
                  transition: { duration: 0.3, ease: "easeOut" },
                },
              }}
            />
          </motion.span>
          <span className='inline-block relative mr-1'>@ </span>
          <motion.span
            layout
            className='inline-block relative cursor-pointer group'
            whileHover='hover'
          >
            {"WebVeda"}
            <motion.span
              className='absolute bottom-0 left-0 w-0 h-[1px] bg-primary'
              variants={{
                hover: {
                  width: "100%",
                  transition: { duration: 0.3, ease: "easeOut" },
                },
              }}
            />
          </motion.span>
        </motion.p>
        <motion.div
          className='resumebutton'
          initial={{ opacity: 0 }}
          onClick={() => window.open("/SharanResume5.0.pdf", "_blank")}
        >
          <Button variant='secondary' className='cursor-pointer'>
            Resume
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
