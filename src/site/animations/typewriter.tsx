import { useEffect, useState } from "react";
import { useInView, IntersectionObserverProps } from "react-intersection-observer";
import { GlobalTypes } from "../globals";

export type TypewriterProps = {
    className?: string;
    text: string;
} & GlobalTypes;

export function Typewriter({ className = '', text, ...rest }: TypewriterProps) {
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: false,
    });
    const [textToShow, setTextToShow] = useState('');

    useEffect(() => {
        let i = -1;
        let interval: NodeJS.Timeout;

        if (inView) {
            interval = setInterval(() => {
                i++;
                setTextToShow((prev) => prev + text.charAt(i));

                if (i === text.length - 1) {
                    clearInterval(interval);
                }
            }, 100);
        } else {
            setTextToShow('');
        }

        return () => clearInterval(interval);
    }, [inView, text]);

    return (
        <div ref={ref} className={className}>
            {textToShow.split('').map((char, index) => (
                <span key={index}>{char}</span>
            ))}
        </div>
    );
}
