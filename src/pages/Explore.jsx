import React, { useState } from 'react';
import { requestToGroqAi } from "../utils/groq";
import ReactMarkdown from 'react-markdown';
import Typewriter from '../components/Typewriter';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

const Explore = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [listening, setListening] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        const ai = await new Promise(resolve => {
            setTimeout(async () => {
                const result = await requestToGroqAi(document.getElementById('content').value);
                resolve(result);
            }, 1000); // 1 second delay
        });
        setData(ai);
        setLoading(false);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit();
        }
    }

    const startVoiceInput = () => {
        if (recognition) {
            recognition.start();
            setListening(true);

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                document.getElementById('content').value = transcript;
                handleSubmit();
                setListening(false);
            }

            recognition.onspeechend = () => {
                recognition.stop();
                setListening(false);
            }

            recognition.onerror = (event) => {
                console.error('Speech recognition error', event.error);
                setListening(false);
            }
        } else {
            alert('Speech recognition not supported in this browser.');
        }
    }

    return (
        <main className='flex flex-col justify-center items-center max-w-4xl w-full mx-auto min-h-screen px-4'>
            <div className='flex flex-col mb-20 gap-3'>
                <h1 className='font-mono text-6xl text-indigo-500 font-semibold [text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-indigo-500'>HannnAI</h1>
                <p className='text-xl text-gray-400'>Powered By LLama3</p>
                <Typewriter text="I am HannnAI, i am supported by LLama, an AI designed to simulate conversations with humans. I'm a type of artificial intelligence called a Large Language Model, which means I'm trained on a massive dataset of text to generate human-like responses. My primary purpose is to assist and interact with users like you through text-based conversations." />
            </div>
            <form className='flex flex-col gap-4 py-4 w-full' onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <textarea
                    className='py-2 px-4 text-md rounded-md bg-gray-200 resize-none overflow-y-hidden'
                    placeholder='Enter your question...'
                    id='content'
                    rows='3'
                    onKeyPress={handleKeyPress}
                />
                <button
                    type='button'
                    className='bg-indigo-500 rounded-md py-2 px-4 font-bold text-white flex justify-center items-center'
                    onClick={handleSubmit}
                >
                    {loading ? (
                        <div className="loader"></div>
                    ) : "Send"}
                </button>
                <button
                    type='button'
                    className='bg-green-400 rounded-md py-2 px-4 font-bold text-white flex justify-center items-center'
                    onClick={startVoiceInput}
                    disabled={listening}
                >
                    {listening ? "Listening..." : <p className='text-center font-medium text-sm '>Voice Command (Ask in english)  <i class="fa fa-microphone"></i></p>}
                </button>
                <p className='text-gray-400 text-sm font-mono'>HannnAI By M.Raihan Athalah Ilham</p>
            </form>
            <div className='max-w-4xl w-full mx-auto'>
                {data && (
                    <div className="markdown-container">
                        <ReactMarkdown className="text-base font-medium text-gray-400 md:text-black lg:text-black xl:text-black 2xl:text-black text-left bg-black md:bg-gray-400 lg:bg-gray-400 xl:bg-gray-400 2xl:bg-gray-400 rounded-md px-2 py-3 mb-5 leading-7 tracking-tight w-auto">
                            {data}
                        </ReactMarkdown>
                    </div>
                )}
            </div>

        </main>
    );
}

export default Explore;
