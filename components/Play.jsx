"use client"
import React from 'react'
import { motion } from 'motion/react';
function Play() {
  return (
    
    <div className='border-blue-300 border-2 h-[384px] p-9 m-9'>
        
        <h1 className='flex justify-center text-7xl z-0 text-white items-center'>Play with Me </h1>
        <motion.img
         drag
         initial={
            {
                x:790
             }
         }
         whileDrag={{
            scale:0.8
        }}
         dragConstraints={{
           left:0,
           right:1150,
           top:-2530,
           bottom:150
         }}
         animate={{
            rotate:360
            
         }}
         transition={{
            delay:1,
            repeat:Infinity,
            duration:3,
            ease:'anticipate'
         }}
        className=' w-28 z-10 h-28'
        src='/oggy-6.png'
        />
        
    </div>
  )

}

export default Play