import React from 'react'
import Image from 'next/image'

const Products = () => {
  return (
    <div id="shop" className='flex flex-col h-full w-full py-[10%] px-5 z-20 items-center justify-center'>
        <h2 className='text-4xl text-center font-bold md:max-w-md mb-14'>
            More of your products you can get now
        </h2>
        <div className='flex md:flex-row flex-col items-center justify-center w-full h-full mx-auto gap-5'>
            <div className="bg-gray-900 md:h-[350px] h-[600px] overflow-clip flex md:flex-row flex-col-reverse">
                <div className='p-[30px] flex flex-col justify-stretch'>
                    <h3 className='text-2xl font-bold mb-2 self-start'>
                    Headphone Bass-H31
                    </h3>
                    <p className='mb-5 w-full self-start flex-grow'>
                    Type H31 headphones have headphone quality using full bass technology
                    </p>
                    <div className='flex gap-3 '>
                        <span>$64.00</span>
                        <a href='#add-to-cart' className='px-5 py-1 bg-lime-400 rounded-3xl text-black text-sm hover:text-lime-400 hover:bg-black duration-300'>
                            Add Cart
                        </a>
                    </div>
                </div>
                <div className="bg-[url('/images/product02.jpg')] bg-no-repeat bg-cover bg-center h-full w-full" />
            </div>
            <div className="bg-gray-900 md:h-[350px] h-[600px] overflow-clip flex md:flex-row flex-col-reverse">
                <div className='p-[30px] flex flex-col justify-stretch'>
                    <h3 className='text-2xl font-bold mb-2 self-start'>
                        Headphone HN-3200
                    </h3>
                    <p className='mb-5 w-full self-start flex-grow'>
                        Type HN-3200 headphones have headphone quality using full bass technology
                    </p>
                    <div className='flex gap-3 '>
                        <span>$74.00</span>
                        <a href='#add-to-cart' className='px-5 py-1 bg-lime-400 rounded-3xl text-black text-sm hover:text-lime-400 hover:bg-black duration-300'>
                            Add Cart
                        </a>
                    </div>
                </div>
                <div className="bg-[url('/images/product01.jpg')] bg-no-repeat bg-cover bg-center h-full w-full " />
            </div>
        </div>
    </div>
  )
}

export default Products