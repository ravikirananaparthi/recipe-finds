import React from 'react';
import { FaClockRotateLeft } from "react-icons/fa6";
function Main(props) {
    return (
        <div className='text-gray-600 px-16 py-6 bg-gray-100 md:col-span-2'>
            <div className='flex  justify-center md:justify-end'>
                <a  className='btn  transition ease-out duration-500'href="https://www.amazon.in/">Log In</a>
                <a  className='btn  transition ease-in-out duration-500'href="https://www.amazon.in/">Sign Up</a>
            </div>
            <header>
                <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
                <h3 className='text-2xl font-semibold'>For Coders</h3>
            </header>
            <div>
                <h4 className='font-bold mt-12 pb-2 border-b border-gray-300'>Latest Recipes</h4>
                
                <div className=' grid lg:grid-cols-3 gap-11 mt-8'>
                {/**cards go here */}
                    <div className='card'>
                        <img className='w-full h-32 sm:h-48 object-cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ286k71O5mD_f9Ex0KmYqOQ9f5armPFQf4zA&usqp=CAU' alt='Fuck Off '/>
                        <div className='m-4'>
                            <span className='font-bold'>
                                5 Bean Chilli Chew 
                            </span>
                            <span className='block font-gray-500 text-sm'>
                                Receipe By Jane
                            </span>
                        </div>
                        <div className='badge flex justify-start'>
                        
                        <FaClockRotateLeft /><span className='pl-2'>26 min</span>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='w-full h-32 sm:h-48 object-cover' src='https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Fuck Off '/>
                        <div className='m-4'>
                            <span className='font-bold'>
                                Noodles
                            </span>
                            <span className='block font-gray-500 text-sm'>
                            Receipe By Walter White 
                            </span>
                        </div>
                        <div className='badge flex justify-start'>
                        <FaClockRotateLeft /> <span className='pl-2'>20 min</span>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='w-full h-32 sm:h-48 object-cover' src='https://images.pexels.com/photos/351962/pexels-photo-351962.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Fuck Off '/>
                        <div className='m-4'>
                            <span className='font-bold'>
                            Methamphetamine
                            </span>
                            <span className='block font-gray-500 text-sm'>
                            Receipe By Jessse Pinkman
                            </span>
                        </div>
                        <div className='badge flex justify-start'>
                        <FaClockRotateLeft /><span className='pl-2'>26 min</span>
                        </div>
                    </div>
                </div>

                <h4 className='font-bold mt-12 pb-2 border-b border-gray-300'>Most Popular</h4>
                {/**Cards Goes Here */}
                <div className='mt-8'>

                </div>
                <div className='flex items-center justify-center'>
                    <div className='font-bold  transform scale-125 btn'>Load More</div>
                </div>
            </div>

        </div>
    );
}

export default Main;