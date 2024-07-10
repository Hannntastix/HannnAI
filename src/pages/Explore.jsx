import React, { useState, useEffect } from 'react';
import { requestToGroqAi } from "../utils/groq";
import ReactMarkdown from 'react-markdown';
import Typewriter from '../components/Typewriter';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

const Explore = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [listening, setListening] = useState(false);
    const [history, setHistory] = useState(() => {
        const savedHistory = localStorage.getItem('history');
        return savedHistory ? JSON.parse(savedHistory) : [];
    });
    const [expanded, setExpanded] = useState({});

    useEffect(() => {
        localStorage.setItem('history', JSON.stringify(history));
    }, [history]);

    const handleSubmit = async () => {
        const userInput = document.getElementById('content').value;
        setLoading(true);
        const ai = await new Promise(resolve => {
            setTimeout(async () => {
                const result = await requestToGroqAi(userInput);
                resolve(result);
            }, 1000); // 1 second delay
        });
        setData(ai);
        const timestamp = new Date().toLocaleString();
        setHistory(prevHistory => {
            const newHistory = [...prevHistory, { question: userInput, answer: ai, date: timestamp }];
            if (newHistory.length > 5) {
                newHistory.shift();
            }
            return newHistory;
        });
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

    const stopVoiceInput = () => {
        if (recognition) {
            recognition.stop();
            setListening(false);
        }
    }

    const toggleVoiceInput = () => {
        if (listening) {
            stopVoiceInput();
        } else {
            startVoiceInput();
        }
    }

    const handleDelete = (index) => {
        setHistory(prevHistory => {
            const newHistory = [...prevHistory];
            newHistory.splice(index, 1);
            return newHistory;
        });
    }

    const truncateText = (text, length, index) => {
        if (text.length > length && !expanded[index]) {
            return (
                <>
                    {text.slice(0, length)}...
                    <button
                        className='text-blue-500 underline ml-1 text-sm'
                        onClick={() => setExpanded(prev => ({ ...prev, [index]: true }))}
                    >
                        Read more
                    </button>
                </>
            );
        }
        return text;
    }

    return (
        <main className='flex flex-col justify-center items-center max-w-4xl w-full mx-auto min-h-screen px-4 arsenal-sc-reguler'>
            <div className='flex flex-col mb-20 gap-3'>
                <h1 className='dancing-script-font text-6xl text-indigo-500 font-semibold [text-shadow:2px_2px_5px_var(--tw-shadow-color)] shadow-indigo-500'>HannnAI</h1>
                <p className='text-xl text-gray-400 source-code-pro-js-tutorial'>Powered By LLama3</p>
                <img src="https://static.vecteezy.com/system/resources/previews/000/540/933/original/abstract-beautiful-gradient-background-vector.jpg" alt="" className='rounded-md hover:opacity-80 hover:animate-pulse' />
                <p className='text-center text-xl text-white mb-5 source-code-pro-js-tutorial'>Illustrated by Raihan</p>
                <Typewriter text="I am HannnAI, now in version 1.5, supported by LLama. As an AI designed to simulate conversations with humans, I have been trained on an even larger and more diverse dataset than before. This extensive training allows me to generate more accurate and human-like responses. My primary purpose is to assist and interact with users like you through text-based conversations, now with enhanced capabilities thanks to the improvements in HannnAI version 1.5." />
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
                    className={`rounded-md py-2 px-4 font-bold text-white flex justify-center items-center ${listening ? 'bg-red-500' : 'bg-green-500'} xl:block hidden`}
                    onClick={toggleVoiceInput}
                >
                    {listening ? "Stop Recording" : <p className='text-center font-medium text-sm '>Start Voice Command (Ask in english)  <i className="fa fa-microphone"></i></p>}
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
            <div className='history-section max-w-4xl w-full mx-auto mt-8 bg-zinc-950 px-4 rounded-md mb-5 py-2'>
                {history.length === 0 ? (
                    <h2 className='text-xl text-gray-200 py-4 font-bold'>No Prompt History</h2>
                ) : (
                    <>
                        <h2 className='text-2xl font-bold text-gray-200 py-4'>Your Prompt History</h2>
                        <div className='w-full h-full bg-zinc-900 rounded-sm px-2 py-1'>
                            <ul className='mt-4'>
                                {history.map((item, index) => (
                                    <li key={index} className='mb-4 flex justify-between items-start border-b-2 border-zinc-600'>
                                        <div className='flex flex-col'>
                                            <p className='font-semibold text-zinc-300 text-left'>• {truncateText(item.question, 50, index)}</p>
                                            <p className='text-zinc-500 text-left'>{item.date}</p>
                                        </div>
                                        <button
                                            className='ml-4 bg-red-700 text-white rounded px-2 '
                                            onClick={() => handleDelete(index)}
                                        >
                                            X
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}

export default Explore;
