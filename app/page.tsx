import Menu from "@/components/Menu";
import { Hero } from "@/components/Hero";
import { Partner } from "@/components/Partner";
import { Space_Grotesk } from 'next/font/google';
import { Spec } from "@/components/Spec";
import Blog from "@/components/Blog";
import Details from "@/components/Details";


const grotesk = Space_Grotesk({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='flex relative h-full flex-col items-center justify-between overflow-x-hidden'>
      <div className={`${grotesk.className} h-full w-full dark:bg-black bg-white dark:bg-vertical-line-white/[0.1] bg-vertical-line-black/[0.1] relative flex flex-wrap items-center justify-center px-4 sm:px-12 lg:px-24 overflow-hidden`}>
        <Menu />
        <Hero />
        <Partner />
        <Spec />
        <Blog />
        <Details />
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
      </div>      
    </main>
  );
}
