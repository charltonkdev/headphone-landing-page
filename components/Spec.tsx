"use client"
import { motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Button } from './ui/MovingBorder'

const imageVariants = {
    initial: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

export const Spec = () => {
    const ref = useRef(null);

  return (
    <div ref={ref} className='overflow-y-hidden relative w-full h-screen z-10 flex flex-col md:flex-row justify-between py-32'>
        <div className='md:w-[45vw] z-10 grow-3'>
            <motion.h2
                initial={{ opacity:0, y: 50}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeInOut', duration:.5, delay: .3}}
                className='leading-[1.3em] text-4xl md:text-[3vw]'
              >
                The most recent high-quality headphones that produce realistic sound
            </motion.h2>
            <motion.p
             initial={{ opacity:0, x: -50}}
             whileInView={{opacity: 1, x: 0}}
             transition={{ ease: 'easeInOut', duration:.5, delay: .5}}
             className='px-8 text-gray-400 border-l-lime-400 border-l-4 mt-10 max-w-sm text-sm'>
              Using the world's latest technology, we maximize the sound that is comfortable to hear
            </motion.p>
            <Button className='bg-lime-400 text-black hover:bg-black hover:text-white duration-700 hover:duration-700 hover:border-slate-100 border-[0.5px]'>
              Read More
            </Button>
        </div>
        <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView="visible"
            transition={{ duration: 1, ease: 'easeIn', delay: .5}}
            className="flex absolute right-0 md:right-44 top-0 flex-col">
            <Image alt='headphone' src='/images/headphone01.png' width={607} height={850} />
          </motion.div>
        <div className='flex flex-col px-8 md:max-w-[13vw] mt-10 md:mt-0'>
            <div className='flex flex-col relative'>
              <span className='text-lime-400 text-4xl'>
                98K
              </span>
              <p className='text-xs pt-2'>
                Customer satisfaction with our products
              </p>
            </div>
            <div className='flex flex-col relative mt-8'>
              <span className='text-lime-400 text-4xl'>
                132K
              </span>
              <p className='text-xs pt-2'>
                Wide range of products available
              </p>
            </div>
            <div className='flex flex-col relative mt-8'>
              <span className='text-lime-400 text-4xl'>
                36K
              </span>
              <p className='text-xs pt-2'>
                Has spread all over the world
              </p>
            </div>
        </div>
    </div>
  )
}