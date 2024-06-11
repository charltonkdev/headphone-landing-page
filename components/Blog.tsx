"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className='flex relative flex-col w-full h-full z-10 py-24'>
        <motion.h2
                initial={{ opacity:0, y: 50}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeInOut', duration:.5, delay: .3}}
                className='leading-[1.3em] text-4xl md:text-[3vw] md:max-w-[60vw] pb-14'
        >
            Music is being empowered, and the creative process is being pushed forward to increase creativity
        </motion.h2>
        <div className='flex flex-col md:flex-row relative w-full justify-start'>
            <motion.div
             initial={{ opacity:0, x: -50 }}
             whileInView={{ opacity: 1, x: 1}}
             transition={{ ease: 'easeInOut', duration: .5}}
             className='flex md:w-[18vw]'>
                <Image alt='blog' src='/images/blog.webp' width={300} height={300} />
            </motion.div>
            <motion.div
             initial={{ opacity:0, x: -50}}
             whileInView={{ opacity: 1, x: 0}}
             transition={{ staggerChildren: 0.2, ease: 'easeInOut', duration:.5, delay: .5}}
             className='flex flex-col px-12 md:max-w-[50vw]'>
                <p className='text-gray-400 mt-10 mb-3 text-sm leading-[1.6em]'>
                    Highly detailed bio-diaphragm audio drivers ensure precise and clear audio for your creative and productive processes. Enhance comfort with soft, resilient earpads that prevent fatigue during long listening or creative sessions. Part of a headphone system known for rugged construction and responsible design - built to last.
                </p>
                <a className="relative w-fit flex-row text-lime-400 text-sm group" href="#">
                Read More
                <span className="absolute bottom-0 left-0 w-[20vw] md:w-[5vw] h-[1px] bg-lime-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
                </a>
            </motion.div>
        </div>
    </div>
  )
}

export default Blog