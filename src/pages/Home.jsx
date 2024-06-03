import React from 'react'
import Typewriter from '../components/Typewriter'

const Home = () => {
    return (
        <>
            <main className='w-full bg-none justify-center items-center md:h-screen h-[60vh] md:justify-center md:items-center flex-grow'>
                <div className='flex md:flex-row flex-col mb-20 md:gap-10 gap-5 justify-center items-center h-screen w-full'>
                    <div className='md:w-3/6 text-left px-5'>
                        <h1 className='font-mono lg:text-8xl md:text-6xl text-5xl text-indigo-500 
                        font-semibold [text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-indigo-500'>HannnAI</h1>
                        <p className='text-gray-200 font-semibold md:text-2xl text-xl py-3 font-serif'>By M.Raihan Athalah Ilham</p>
                        <Typewriter text="Hello, Welcome to HannnAI, a website contains an AI supported by Llama3. You can ask anything to HannnAI by go to explore 
                        page and type your question on the form and click 'Send' Button." />
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