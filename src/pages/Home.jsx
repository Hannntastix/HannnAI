import React from 'react'
import Typewriter from '../components/Typewriter'
import { NavbarLink } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <main className='w-full bg-none justify-center items-center md:h-screen h-[60vh] md:justify-center md:items-center flex-grow'>
                <div className='flex md:flex-row flex-col mb-20 md:gap-10 gap-5 justify-center items-center h-screen w-full'>
                    <div className='md:w-3/6 text-left px-5'>
                        <h1 className='font-mono lg:text-8xl md:text-6xl text-5xl text-indigo-500 
                        font-semibold [text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-indigo-500'>HannnAI</h1>
                        <p className='text-gray-200 font-semibold md:text-2xl text-xl py-3 font-serif'>By M.Raihan Athalah Ilham</p>
                        <Typewriter text="We are excited to introduce HannnAI, now in version 1.5, supported by LLama. In this new version, we have significantly expanded the dataset used to train HannnAI, making it more extensive and diverse than ever before. This rigorous training enables HannnAI to generate responses that are more accurate and human-like. Our goal with HannnAI is to provide a highly interactive and assistive AI for users through text-based conversations, 
                        and the improvements in version 1.5 have enhanced its capabilities to better serve this purpose." />
                        <div className='h-7'/>
                        <Link to="https://hannn-ai.vercel.app/explore" target='blank' className='px-4 py-2 bg-white rounded-full text-lg my-5 hover:bg-zinc-200 transition ease-in-out duration-300'>
                            <span className='font-semibold'>Try HannnAI</span> &#8599;
                        </Link>
                    </div>
                    <div className='md:w-3/6 xl:ml-72 lg:ml-36'>
                        <img src="https://images.squarespace-cdn.com/content/v1/563cc987e4b05a2939898c49/1506210816573-OY3PBRXTVKXSQU0U23FP/ke17ZwdGBToddI8pDm48kPnsf5mMwK3KDy1tisBlUmRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzo4SI7WUt2Kh3mJ9yIXE1J2LwB1WS8XsjNPjOfnyfL5aVyG4ZMghpx64iX7JBzitc/ihealth-AI.gif" className=" md:h-80 md:w-96 rounded-full" alt="AI" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home