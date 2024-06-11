"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Details = () => {
  const line1Variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const line2Variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.5,  // Delay to start after the first line finishes
      },
    },
  };
  return (
    <div className="relative h-full w-screen text-white flex flex-col items-center justify-center p-4 z-10">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: .5, delay: .3 }}
        className="text-3xl md:text-4xl lg:text-5xl max-w-3xl text-center mb-8">
        H24X headphone model with a contemporary design style
      </motion.h1>
      <Image src="/images/headphone.png" alt="Headphone" className="w-auto md:h-full" width={650} height={650} />
      <div className="absolute h-full w-full top-0 flex flex-col justify-center">
        <div className="absolute w-full h-full flex flex-col items-center">
          <div className="absolute top-[20%] left-0 flex flex-col items-start pl-4 w-[30vw]">
            <h2 className="text-xl font-semibold">High Quality Foam</h2>
            <p className="text-sm w-[15vw]">Sponge foam with superior quality, so that it is used for a long time, the head does not feel hot.</p>
            <svg width="600" height="400" className="absolute left-[40%] top-1" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="10" r="5" fill="white" />
              <motion.path
                d="M20 10 H180"
                stroke="white"
                strokeWidth="3"
                initial="hidden"
                whileInView="visible"
                variants={line1Variants}
              />
              <motion.path
                d="M180 10 L350 120"
                stroke="white"
                strokeWidth="3"
                initial="hidden"
                whileInView="visible"
                variants={line2Variants}
              />
            </svg>
          </div>
          <div className="absolute top-[20%] right-0 flex flex-col pl-4">
            <h2 className="text-xl font-semibold text-right">Premium Foam</h2>
            <p className="text-sm text-right w-[15vw]">Sponge foam with premium understanding so that when used for a long time it doesn't feel hot in the ears.</p>
            <svg width="550" height="400" className="absolute overflow-visible right-[60%] top-1" xmlns="http://www.w3.org/2000/svg">
              <circle cx="550" cy="10" r="5" fill="white" />
              <motion.path
                d="M550 10 H350"
                stroke="white"
                strokeWidth="3"
                initial="hidden"
                whileInView="visible"
                variants={line1Variants}
              />
              <motion.path
                d="M351 9 L150 300"
                stroke="white"
                strokeWidth="3"
                initial="hidden"
                whileInView="visible"
                variants={line2Variants}
              />
            </svg>
          </div>
          <div className="absolute bottom-[10%] left-0 flex flex-col items-start pl-4 ">
            <h2 className="text-xl font-semibold">Material B-H23</h2>
            <p className="text-sm w-[15vw]">Long-lasting quality material and color that does not fade over time.</p>
            <svg width="600" height="400" className="absolute left-[70%] bottom-1" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="330" r="5" fill="white" />
              <motion.path
                d="M10 330 H180"
                stroke="white"
                strokeWidth="3"
                initial="hidden"
                whileInView="visible"
                variants={line1Variants}
              />
              <motion.path
                d="M180 330 L280 120"
                stroke="white"
                strokeWidth="3"
                initial="hidden"
                whileInView="visible"
                variants={line2Variants}
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-8 flex space-x-4">
        <button className="bg-lime-500 text-black px-4 py-2 rounded-full text-xs">Add to Basket</button>
        <button className="border border-lime-500 text-white px-4 py-2 rounded-full text-xs">Detail Product</button>
      </div>
    </div>
  )
}

export default Details
