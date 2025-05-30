"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = ({ isHome = false }: { isHome?: boolean }) => {
  return (
    <div className='fixed top-0 left-0 w-full flex justify-center items-center p-3'>
      <motion.div
        className='navbar w-1/3 flex justify-between items-center border-2 border-border p-2 px-8 rounded-lg bg-card'
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
        <Link
          href='/contact'
          className={`text-md font-normal text-primary ${
            usePathname() === "/contact"
              ? "underline decoration-2 underline-offset-4"
              : ""
          }`}
        >
          Get in touch
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
