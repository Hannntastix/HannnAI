import React, { useState } from 'react';
import { requestToGroqAi } from "../utils/groq";
import ReactMarkdown from 'react-markdown';
import Typewriter from '../components/Typewriter';

const Explore = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        const ai = await new Promise(resolve => {
            setTimeout(async () => {
                const result = await requestToGroqAi(document.getElementById('content').value);
                resolve(result);
            }, 2000); // 2 seconds delay
        });
        setData(ai);
        setLoading(false);
    }

    return (
        <main className='flex flex-col justify-center items-center max-w-4xl w-full mx-auto min-h-screen px-4'>
            <div className='flex flex-col mb-20 gap-3'>
                <h1 className='font-mono text-6xl text-indigo-500 font-semibold [text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-indigo-500'>HannnAI</h1>
                <p className='text-xl text-gray-400'>Powered By LLama3</p>
                <Typewriter text="I am HannnAI, i am supported by LLama, an AI designed to simulate conversations with humans. I'm a type of artificial intelligence called a Large Language Model, which means I'm trained on a massive dataset of text to generate human-like responses. My primary purpose is to assist and interact with users like you through text-based conversations." />
            </div>
            <form className='flex flex-col gap-4 py-4 w-full' onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <input
                    type="text"
                    className='py-2 px-4 text-md rounded-md bg-gray-200'
                    placeholder='Enter your question...'
                    id='content'
                />
                <button
                    type='button' // Mengubah type menjadi 'button'
                    className='bg-indigo-500 rounded-md py-2 px-4 font-bold text-white flex justify-center items-center'
                    onClick={handleSubmit}
                >
                    {loading ? (
                        <div className="loader"></div>
                    ) : "Send"}
                </button>
                <p className='text-gray-400 text-sm font-mono'>HannnAI By M.Raihan Athalah Ilham</p>
            </form>
            <div className='max-w-4xl w-full mx-auto overflow-x-auto'>
                {data && (
                    <div className="markdown-container">
                        <ReactMarkdown className="markdown-body text-white text-left bg-gray-900 rounded-md px-2 py-3 mb-5 leading-5 tracking-tighter">{data}</ReactMarkdown>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Explore;
