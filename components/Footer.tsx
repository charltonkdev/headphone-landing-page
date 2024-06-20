import React from 'react'

export function Footer() {
  return (
    <footer className='flex md:flex-row flex-col items-end text-center justify-between w-full h-[30vh] p-10 z-40 mt-32'>
        <div className='flex p-2 md:flex-row flex-col md:items-center items-start'>
          <h4 className='text-2xl font-bold mb-1 pr-2'>
              Sync
          </h4>
          <p className='text-xs text-left'>
          World company that develops the highest quality headphone technology
          </p>
        </div>
        <div className='p-2'>
          <p className='text-xs'><a className="hover:text-lime-300" href="https://charltonk-portfolio.vercel.app/" target='_blank' rel="noreferrer">@Charlton K.</a></p>
        </div>
    </footer>
  )
}

export default Footer