'use client'
import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';
import util, {
    isInPage,
    positionCalculator,
    opacityCalculator
} from "../lib/util"

import Image from 'next/image'

const totalSection = 4;

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
                {["首頁", "基本資料", "經歷", "聯絡方式"].map((text, cnt) => (
                    <NavigateCard text={text} key={text} className={clsx(
                        "animate-appear",
                        isInPage(positionYPercentage, cnt + 1) || "hidden"
                    )} />
                ))}
            </div>
            <section className={clsx(css.page, 'flex flex-row')}>
                {/* First Section */}
                <div className={clsx(
                    'w-1/2 h-full flex flex-col justify-center bg-gradient-to-b from-gray-100 to-gray-50 space-y-5 px-20',
                    isInPage(positionYPercentage, 1) ? "absolute" : "hidden"
                )}>
                    <div style={{
                        translate: `0 -${positionCalculator(positionYPercentage, 20, 1)}vh`,
                        opacity: opacityCalculator(positionYPercentage, 1)
                    }}>
                        <h1 className='text-8xl'>
                            Milliax
                        </h1>
                        <p className='text-xl text-green-700'>
                            Keep Promises | Team Taiwan
                        </p>
                    </div>
                </div>
                <div className='pl-[50vw] h-full flex flex-col justify-center text-2xl absolute'>
                    Description
                </div>
            </section>
            <section className={clsx(css.page, 'flex flex-row')}>
                {/* Second Section */}
                <div className={clsx(
                    'w-1/2 h-full flex flex-col justify-start space-y-5 px-20 pt-40',
                )}>
                    <div className=''>
                        <h1 className='text-3xl'>
                            Personality
                        </h1>
                        <p>

                        </p>
                    </div>
                </div>
                <div className='w-1/2 h-full flex flex-col justify-start pt-52 px-20 text-2xl absolute right-0 bg-gradient-to-b from-gray-50 to-gray-100'>
                    <h1 className="text-3xl">
                        Skills
                    </h1>
                    <p>

                    </p>
                </div>
            </section>
            <section className={clsx(css.page, 'flex flex-row')}>
                {/* Third Section */}
                <div className={clsx(
                    'w-1/2 h-full flex flex-col justify-start py-80 bg-gradient-to-b from-gray-100 to-gray-50 space-y-5 px-20',
                )}>
                    <div>
                        <h1 className='text-7xl'>
                            Degree
                        </h1>
                        <p className='text-xl text-green-700'>

                        </p>
                    </div>
                </div>
                <div className='w-1/2 h-full flex flex-col justify-end py-20 text-2xl absolute right-0'>
                    <h1 className='text-5xl'>
                        Experiences
                    </h1>
                    <p className='text-xl text-green-700'>

                    </p>
                </div>
            </section>
            <section className={clsx(css.page, 'flex flex-row')}>
                {/* Forth Section */}
                <div className={clsx(
                    'w-full h-full flex flex-col justify-center bg-gradient-to-b from-gray-100 to-gray-50 space-y-5 px-20',
                )}>
                    <div className='w-full h-full py-20'>
                        <h1 className='text-6xl '>
                            Keep In touch
                        </h1>
                        <p className='text-xl text-green-700'>
                            
                        </p>
                    </div>
                </div>

            </section>
        </main >
    )
}
