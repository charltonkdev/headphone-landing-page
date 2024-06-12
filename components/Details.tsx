"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/MovingBorder'

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
        delay: 0.5,
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
        delay: 1,  // Delay to start after the first line finishes
      },
    },
  };
  const detailsVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative h-full w-screen text-white flex flex-col items-center justify-center py-32 z-10">
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
          <motion.div
          initial="hidden"
          whileInView="visible"
          variants={detailsVariants}
          className="absolute top-[20%] left-0 flex flex-col items-start pl-4 w-[30vw]">
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
                d="M180 10 L350 180"
                stroke="white"
                strokeWidth="3"
                initial="hidden"
                whileInView="visible"
                variants={line2Variants}
              />
            </svg>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={detailsVariants}
            className="absolute top-[40%] right-0 flex flex-col pl-4">
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
                d="M351 9 L150 160"
                stroke="white"
                strokeWidth="3"
                initial="hidden"
                whileInView="visible"
                variants={line2Variants}
              />
            </svg>
          </motion.div>
          <motion.div
          initial="hidden"
          whileInView="visible"
          variants={detailsVariants}
          className="absolute top-[45%] left-0 flex flex-col items-start pl-4 ">
            <h2 className="text-xl font-semibold">Material B-H23</h2>
            <p className="text-sm w-[15vw]">Long-lasting quality material and color that does not fade over time.</p>
            <svg width="600" height="400" className="absolute left-[70%] top-1" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="5" fill="white" />
              <motion.path
                d="M10 10 H180"
                stroke="white"
                strokeWidth="3"
                initial="hidden"
                whileInView="visible"
                variants={line1Variants}
              />
              <motion.path
                d="M180 10 L290 220"
                stroke="white"
                strokeWidth="3"
                initial="hidden"
                whileInView="visible"
                variants={line2Variants}
              />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className="mt-8 flex space-x-4">
        <Button className='bg-lime-400 text-black hover:bg-black hover:text-white duration-700 hover:duration-700 hover:border-slate-100 border-[0.5px]'>
          Buy Now
        </Button>
        <Button>
          More Details
        </Button>
      </div>
    </div>
  )
}

export default Details
