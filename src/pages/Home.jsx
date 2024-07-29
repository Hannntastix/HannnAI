import React from 'react'
import Typewriter from '../components/Typewriter'
import { NavbarLink } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <main className='flex flex-col justify-center items-center w-full mx-auto min-h-screen px-4 arsenal-sc-reguler'>
                <div className='flex md:flex-row flex-col mb-20 md:gap-10 gap-5 justify-center md:items-center h-screen w-full md:my-32'>
                    <div className='md:w-full text-left px-5'>
                        <h1 className='dancing-script-font lg:text-8xl md:text-6xl text-5xl text-indigo-500 
                        font-semibold [text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-red-700 text-center select-none pointer-events-none'>HannnAI</h1>
                        <p className='text-zinc-400 font-semibold md:text-lg text-xl py-3 source-code-pro-js-tutorial text-center select-none pointer-events-none'>By M.Raihan Athalah Ilham</p>
                        <div className='bg-none rounded-lg px-4 py-3 md:w-3/6 mx-auto '>
                            <Typewriter text="We are excited to introduce HannnAI, now in version 2.0, supported by LLama. In this new version, we have significantly expanded the dataset used to train HannnAI, making it more extensive and diverse than ever before. Our goal with HannnAI is to provide a highly interactive and assistive AI for users through text-based conversations, 
                        and the improvements in version 2.0 have enhanced its capabilities to better serve this purpose." />
                        </div>
                        <div className='h-7' />
                        <div className='md:w-3/6 mx-auto'>
                            <Link to="https://hannn-ai.vercel.app/explore" target='blank' className='px-4 py-2 bg-zinc-100 rounded-full text-lg my-5 hover:bg-zinc-400 transition ease-in-out duration-300'>
                                <span className='font-semibold'>Try HannnAI</span> &#8599;
                            </Link>
                        </div>
                        <div className='md:block lg:hidden xl:block hidden w-full h-auto my-20 bg-indigo-950 rounded-md px-4 py-3'>
                            <h1 className='text-center font-bold font-sans text-2xl text-zinc-300 mb-4 select-none pointer-events-none'>Samples</h1>
                            <div className='w-full h-auto bg-black grid grid-cols-2 px-4 py-3 rounded-md'>
                                <div className='w-full h-auto px-4 py-2'>
                                    <p className='text-white'>Q : Hello, can you help me?</p>
                                </div>
                                <div className='w-full h-auto px-4 py-2'>
                                    <p className='text-red-600 font-semibold text-right'>User</p>
                                </div>
                                <div className='w-full h-auto bg-gray-400 px-4 py-2 rounded-md'>
                                    <p className='text-black text-left'>
                                        A : Hello! Of course, I'd be happy to try and help you with your problem. Please go ahead and share what's on your mind, and I'll do my best to listen, understand, and offer guidance or solutions. What's been going on that's got you seeking help?
                                    </p>
                                </div>
                                <div className='w-full h-auto bg-black px-4 py-2 rounded-md'>
                                    <p className='text-indigo-800 font-semibold font-mono text-right'>
                                        HannnAI
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home