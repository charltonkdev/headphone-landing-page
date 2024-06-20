'use client'
import React, { useState } from 'react';

const Menu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="z-50 bg-transparent fixed top-0 text-white w-full">
            <div className="w-screen mx-auto">
                <div className="flex px-4 sm:px-12 lg:px-24 items-center justify-between h-16">
                    <div className="flex flex-grow items-center justify-between">
                        <a href="/" className="flex text-2xl items-center">
                            <span>Sync</span>
                        </a>
                        <div className="hidden md:flex w-full justify-end items-center">
                            <div className="flex items-baseline space-x-4">
                                <a href="#home" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="#brand" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
                                <a href="#spec" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-sm font-medium">Specifications</a>
                                <a href="#shop" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-sm font-medium">Shop</a>
                                <a href="#blog" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
                                <a href="#contact" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white  focus:outline-none focus:ring"
                            onClick={handleMobileMenuToggle}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-zinc-900 bg-opacity-95 z-50 flex flex-col items-center justify-center md:hidden">
                    <div className="absolute top-[18px] right-0">
                        <button
                            type="button"
                            className="text-white"
                            onClick={handleMobileMenuToggle}
                        >
                            <span className="sr-only">Close main menu</span>
                            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
<a href="#home" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-lg font-medium" onClick={handleMobileMenuToggle}>Home</a>
                        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
<a href="#brand" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-lg font-medium" onClick={handleMobileMenuToggle}>About</a>
                        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
<a href="#spec" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-lg font-medium" onClick={handleMobileMenuToggle}>Specifications</a>
                        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
<a href="#shop" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-lg font-medium" onClick={handleMobileMenuToggle}>Shop</a>
                        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
<a href="#blog" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-lg font-medium" onClick={handleMobileMenuToggle}>Blog</a>
                        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
<a href="#contact" className="hover:bg-zinc-700 px-3 py-2 rounded-md text-lg font-medium" onClick={handleMobileMenuToggle}>Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Menu;

