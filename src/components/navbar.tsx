"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = ({ isHome = false }: { isHome?: boolean }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className='fixed top-0 left-0 w-full flex justify-center items-center p-2 md:p-3'>
        <motion.div
          className='navbar w-full md:w-1/3 flex justify-between items-center border-2 border-border p-2 px-4 md:p-2 md:px-8 rounded-lg bg-card'
          initial={{
            y: isHome ? "-200%" : "0%",
            filter: isHome ? "blur(5px)" : "blur(0px)",
          }}
        >
          <Link
            href='/'
            className={`text-md font-normal text-primary ${
              usePathname() === "/"
                ? "underline decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            href='/work'
            className={`text-md font-normal text-primary ${
              usePathname() === "/work"
                ? "underline decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Work
          </Link>
          <Link
            href='/projects'
            className={`text-md font-normal text-primary ${
              usePathname() === "/projects"
                ? "underline decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Projects
          </Link>
          <p
            onClick={() => setModal(true)}
            className={`text-md font-normal text-primary cursor-pointer ${
              usePathname() === "/contact"
                ? "underline decoration-2 underline-offset-4"
                : ""
            }`}
          >
            Get in touch
          </p>
        </motion.div>
      </div>
      <AnimatePresence>
        {modal && (
          <motion.div
            className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-10 bg-background/50 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(false)}
          >
            <motion.div
              className='flex flex-col gap-2 w-xs md:w-md h-xl justify-center items-center bg-background border-2 border-border rounded-lg p-4'
              onClick={(e) => e.stopPropagation()}
            >
              <p>Hit me up at</p>
              <motion.a
                href='mailto:devel.sharan.2003@gmail.com'
                whileHover='hover'
                className='inline-block relative cursor-pointer group'
              >
                devel.sharan.2003@gmail.com
                <motion.span
                  className='absolute bottom-0 left-0 w-0 h-[1px] bg-primary'
                  variants={{
                    hover: {
                      width: "100%",
                      transition: { duration: 0.3, ease: "easeOut" },
                    },
                  }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
