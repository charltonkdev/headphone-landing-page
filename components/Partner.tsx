"use client"
import { useRef } from 'react'
import Image from 'next/image'
import styles from '../app/page.module.css'; 
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger each child by 0.2 seconds
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Partner = () => {
  const ref = useRef(null);

  return (
    <div id="brand" ref={ref} className='flex items-center w-full justify-center flex-col z-20 py-24'>
        <motion.h4
         initial={{ opacity:0, y: 50}}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ ease: 'easeInOut', duration:.5, delay: .3}}
         className='text-sm pb-10'>
            Our partner company
        </motion.h4>
        <motion.div
          className="relative w-full md:flex grid grid-cols-3 gap-10 justify-evenly items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Use whileInView instead of animate
        >
          {['partner01', 'partner02', 'partner03', 'partner04', 'partner05', 'partner06'].map((partner, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <motion.div key={index} className={styles.imageContainer} variants={itemVariants} object-fit="contain">
              <Image
                alt={`partner-${index + 1}`}
                src={`/partners/${partner}.svg`}
                width={500} // Arbitrary values that preserve the aspect ratio
                height={28}
              />
            </motion.div>
          ))}
        </motion.div>
    </div>
  )
}

export default Partner
