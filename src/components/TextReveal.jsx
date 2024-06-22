import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';

const TextReveal = ({ text, className }) => {
    const targetRef = React.useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const words = text.split(" ");

    return (
        <div ref={targetRef} className={clsx("relative z-0 h-[200vh]", className)}>
            <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]">
                <p className="flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        return (
                            <Word key={i} progress={scrollYProgress} range={[start, end]} index={i}>
                                {word}
                            </Word>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

const Word = ({ children, progress, range, index }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    const x = useTransform(progress, range, [index % 2 === 0 ? 50 : -50, 0]);

    return (
        <motion.span style={{ opacity, x }} className="relative mx-1 lg:mx-2.5">
            <span className="absolute opacity-30">{children}</span>
            <span className="text-black dark:text-white">{children}</span>
        </motion.span>
    );
};

export default TextReveal;
