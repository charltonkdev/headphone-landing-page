"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Blog = () => {
  return (
    <div id="blog" className='flex relative items-center justify-center flex-col w-full h-full z-10 py-24'>
        <motion.h2
        initial={{ opacity:0, x: -50 }}
        animate={{ opacity: 1, x: 1}}
        transition={{ ease: 'easeInOut', duration: .5}}
        className='text-4xl text-center font-bold md:max-w-md mb-14'>
            Our Blog
        </motion.h2>
        <div className='flex flex-col md:flex-row relative max-w-5xl justify-start'>
            <motion.div
             initial={{ opacity:0, x: -50 }}
             animate={{ opacity: 1, x: 1}}
             transition={{ ease: 'easeInOut', duration: .5}}
             className='flex md:w-auto w-full items-center justify-center mb-10'>
                <Image alt='blog' src='/images/blog.webp' width={500} height={500} />
            </motion.div>
            
            <motion.div
             initial={{ opacity:0, x: -50}}
             animate={{ opacity: 1, x: 0}}
             transition={{ staggerChildren: 0.2, ease: 'easeInOut', duration:.5, delay: .5}}
             className='flex flex-col md:px-12 md:max-w-[50vw]'>
                <h2 className='leading-[1.3em] text-xl md:text-[xl] md:max-w-[60vw]'
                >
                Music is being empowered, and the creative process is being pushed forward to increase creativity
                </h2>
                <p className='text-gray-400 mt-10 mb-3 text-sm leading-[1.6em]'>
                    Highly detailed bio-diaphragm audio drivers ensure precise and clear audio for your creative and productive processes. Enhance comfort with soft, resilient earpads that prevent fatigue during long listening or creative sessions. Part of a headphone system known for rugged construction and responsible design - built to last.
                </p>
                <a className="relative w-fit flex-row text-lime-400 text-sm group" href="#read-more">
                Read More
                <span className="absolute bottom-0 left-0 w-[15vw] md:w-[3.5vw] h-[1px] bg-lime-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
                </a>
            </motion.div>
        </div>
    </div>
  )
}

export default Blog