import { useEffect, useState, useCallback } from 'react'
import Algoritmos from '../JSON/InfoCv.json'

export default function TypeText() {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [reset,setReset] = useState(false)
    const data = "esarias.com"
    const speed = 50;
    const delay = 5000; // Tiempo en milisegundos para mantener el texto

    const counter = (text) => {
        if (index < text.length) {
            setDisplayedText(prev => prev + text.charAt(index));
            setIndex(prevcount => prevcount + 1);
        } else {
            setReset(true);
            setTimeout(() => {
                setDisplayedText('');
                setIndex(0);
                setReset(false);
            }, delay);
        }
    };
    useEffect(() => {
        if (!reset) {
            const intervalo = setInterval(()=>counter(data), speed);
            return () => clearInterval(intervalo);
        }
    }, [index, reset]);
    return (
        <p>{displayedText}</p>
    )
}




