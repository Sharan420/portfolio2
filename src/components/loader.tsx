"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

export default function Loader() {
  return (
    <motion.div className='loader absolute flex flex-col items-center justify-center h-screen'>
      <div className='w-34 h-34'>
        <img
          src='/food.gif'
          alt='cooking'
          width={200}
          height={200}
          className='object-cover w-full h-full'
        />
      </div>
      <h1 className='text-sm font-light text-foreground animate-pulse'>
        Let Him Cook
      </h1>
    </motion.div>
  );
}
