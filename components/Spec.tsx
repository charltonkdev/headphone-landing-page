"use client"
import { delay, motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Button } from './ui/MovingBorder'

const imageVariants = {
    initial: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0,  transition: { duration: 0.5 } },
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 0.3
      }
    }
  };
  
  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

export const Spec = () => {
  const ref = useRef(null);

  return (
    <div id="spec" ref={ref} className='overflow-y-hidden relative w-full h-screen z-10 flex flex-col md:flex-row justify-between py-32'>
        <div className='md:w-[45vw] z-10 grow-3'>
            <motion.h2
                initial={{ opacity:0, y: 50}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeInOut', duration:.5, delay: .3}}
                className='leading-[1.3em] text-4xl md:text-[3vw]'
              >
                The most recent high-quality headphones that produce realistic sound
            </motion.h2>
            <motion.p
             initial={{ opacity:0, x: -50}}
             animate={{opacity: 1, x: 0}}
             transition={{ ease: 'easeInOut', duration:.5, delay: .5}}
             className='px-8 text-white border-l-lime-400 border-l-4 mt-10 max-w-sm text-sm'>
              Using the world&apos;s latest technology, we maximize the sound that is comfortable to hear
            </motion.p>
            <Button className='bg-lime-400 text-black hover:bg-black hover:text-white duration-700 hover:duration-700 hover:border-slate-100 border-[0.5px]'>
              Read More
            </Button>
        </div>
        <motion.div
            variants={imageVariants}
            initial="initial"
            animate="visible"
            transition={{ duration: 1, ease: 'easeIn', delay: .5}}
            className="flex absolute right-0 md:right-44 top-0 flex-col">
            <Image alt='headphone' src='/images/headphone01.png' width={607} height={850} />
          </motion.div>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className='flex flex-col px-8 md:max-w-[13vw] mt-10 md:mt-0'>
            <motion.div className='flex flex-col relative' variants={staggerItem}>
            <span className='text-lime-400 text-4xl'>
              98K
            </span>
            <p className='text-xs pt-2'>
              Customer satisfaction with our products
            </p>
          </motion.div>
          <motion.div className='flex flex-col relative mt-8' variants={staggerItem}>
            <span className='text-lime-400 text-4xl'>
              132K
            </span>
            <p className='text-xs pt-2'>
              Wide range of products available
            </p>
          </motion.div>
          <motion.div className='flex flex-col relative mt-8' variants={staggerItem}>
            <span className='text-lime-400 text-4xl'>
              36K
            </span>
            <p className='text-xs pt-2'>
              Has spread all over the world
            </p>
          </motion.div>
        </motion.div>
    </div>
  )
}
