import React from 'react'
import { RiSearch2Line } from '@remixicon/react'
export const Menu = () => {
  return (
    <nav className="z-50 bg-transparent fixed top-0 text-white">
        <div className="w-screen mx-auto">
            <div className="flex px-4 sm:px-12 lg:px-24 items-center justify-between h-16">
                <div className="flex flex-grow items-center">
                    <a href="#" className="flex items-center">
                        <span>Sync</span>
                    </a>
                    <div className="hidden md:flex w-full justify-center items-center">
                        <div className="flex items-baseline space-x-4">
                            <a href="#" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="#" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-sm font-medium">Brand</a>
                            <a href="#" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-sm font-medium">Shop</a>
                            <a href="#" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
                            <a href="#" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            <a href="#" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="flex items-center">
                        <a href="#">
                        <RiSearch2Line className='hover:text-lime-400' />
                        </a>                       
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                    <button type="button" className="bg-zinc-800 inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-700 focus:outline-none focus:ring">
                        <span className="sr-only">Open main menu</span>
                        
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Menu