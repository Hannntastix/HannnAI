import { useEffect, useState } from 'react';

function Typewriter({ text }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setDisplayedText(text.substring(0, i + 1));
            i++;
            if (i === text.length) {
                clearInterval(timer);
            }
        }, 15); // Adjust typing speed here
        return () => clearInterval(timer);
    }, [text]);

    return <p className='typewriter-text text-gray-400 text-justify'>{displayedText}</p>;
}

export default Typewriter;
