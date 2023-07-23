'use client'
import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';
import util, {
    isInPage,
    positionCalculator,
    opacityCalculator
} from "../lib/util"

import Image from 'next/image'

const totalSection = 3;

const css = {
    page: "relative h-screen p-1"
};

const NavigateCard = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div className={clsx(
            'relative h-full w-full',
            className
        )}>
            <div className={clsx(
                "bottom-0 absolute w-full flex flex-row justify-center"
            )}>
                <div className="bg-white w-[80%] h-20 border border-black rounded-t-xl text-center flex flex-col justify-center text-3xl font-bold">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    const [positionYPercentage, setPositionYPercentage] = useState<number>(0);
    util(totalSection);

    const setScrollValue = useCallback(() => {
        const documentElement = document.documentElement;
        const percentageOfPageScrolled = documentElement.scrollTop / documentElement.clientHeight;
        const valueToSet = percentageOfPageScrolled * 100;
        setPositionYPercentage(valueToSet);
        console.log("percent: ", valueToSet);
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", setScrollValue);
        window.addEventListener("resize", setScrollValue);

        setScrollValue();

        return () => {
            window.removeEventListener("scroll", setScrollValue);
            window.removeEventListener("resize", setScrollValue);
        }
    }, [])

    return (
        <main className="bg-gray-50">
            <div className="h-screen w-screen z-50 bg-opacity-0 fixed">
                {["首頁", "經歷", ""].map((text, cnt) => (
                    <NavigateCard text={text} key={text} className={clsx(
                        "animate-appear",
                        isInPage(positionYPercentage,cnt+1) || "hidden"
                    )} />
                ))}
            </div>
            <section className={clsx(css.page, 'flex flex-row')}>
                {isInPage(positionYPercentage, 1) && <>
                    <div className={clsx(
                        'w-1/2 h-full flex flex-col justify-center bg-gradient-to-b from-gray-100 to-gray-50 space-y-5 px-20',
                        isInPage(positionYPercentage, 1) ? "fixed" : "hidden"
                    )}>
                        <div style={{
                            translate: `0 -${positionCalculator(positionYPercentage, 20)}vh`,
                            opacity: opacityCalculator(positionYPercentage, 1)
                        }}>
                            <h1 className='text-8xl'>
                                Milliax
                            </h1>
                            <p className='text-xl'>
                                Keep Promises
                            </p>
                        </div>
                    </div>
                    <div className='pl-[50vw] h-full flex flex-col justify-center text-2xl absolute'>
                        Description
                    </div>
                </>}
            </section>
            <section className={clsx(css.page,)}>

            </section>
            <section className={clsx(css.page,)}>

            </section>
        </main >
    )
}
