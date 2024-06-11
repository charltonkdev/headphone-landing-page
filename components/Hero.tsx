"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/MovingBorder';
import { RiScrollToBottomLine } from '@remixicon/react';

/*framer motion */
const headingVariants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
};

const imageVariants = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
};

const buttonVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

const scrollBtnVariants = {
  initial: { opacity: 0, },
  show: { opacity: 1, },
};


export const Hero = () => {

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center">
      
        <div className="flex w-full h-full text-white z-10">
          <div className="relative z-10 flex flex-col flex-start justify-end p-5">
            <div className='flex flex-col justify-end relative'>
              <motion.h1
                variants={headingVariants}
                initial="initial"
                animate="whileInView"
                transition={{ duration: 1, ease: 'easeOut' }}
                className='leading-[1.1em] text-4xl md:text-[7vw] font-bold'
              >
                Listen To The
                <br />
                Amazing Music
                <br />
                Sound.
              </motion.h1>
              <motion.h2
                variants={headingVariants}
                initial="initial"
                animate="whileInView"
                transition={{ duration: 1, ease: 'easeOut', delay: .3 }}
                className="text-sm text-[#959595] max-w-md relative mt-2">
                Some of our products have premium quality so you can feel the sensation of real sound
              </motion.h2>
              <motion.span
                variants={buttonVariants}
                initial="initial"
                animate="whileInView"
                transition={{ duration: 1, ease: 'easeInOut', delay: .5}}
                >
                <Button>
                  Shop Now
                </Button>
              </motion.span>
            </div>
            <motion.div
              variants={scrollBtnVariants}
              initial="initial" 
              animate="show"
              transition={{ duration: 1, ease: 'easeInOut', delay: .8}}
              className='relative flex items-center mt-20'>
                <RiScrollToBottomLine className='hover:text-lime-400 pr-2' />
                <span className="relative left-0 bottom-0 items-start flex text-xs">
                  Scroll down to read more
                </span>
            </motion.div>
          </div>
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate="whileInView"
            transition={{ duration: 1, ease: 'easeIn', delay: .5}}
            className="flex absolute right-0 md:-right-44 top-0 flex-col">
            <Image alt='headphone' src='/images/headphone02.png' width={850} height={850} />
          </motion.div>
        </div>
    </section>
  );
};
