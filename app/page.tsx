'use client'
import clsx from 'clsx';
import {
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';
import util, {
    isInPage,
    positionCalculator,
    opacityCalculator,
    fadeInCalculator,
    positionCalculator2,
    // percentageInPage
} from "../lib/util"

import Image from 'next/image'
import Link from 'next/link'

import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss
} from 'react-icons/si'

import {
    FaSwimmer
} from 'react-icons/fa'

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
    const [width, setWidth] = useState<number>(1024);
    util(totalSection);

    const setScrollValue = useCallback(() => {
        const documentElement = document.documentElement;
        const percentageOfPageScrolled = documentElement.scrollTop / documentElement.clientHeight;
        const valueToSet = percentageOfPageScrolled * 100;
        setWidth(documentElement.clientWidth);
        setPositionYPercentage(valueToSet);
        // console.log("percent: ", valueToSet);
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
        <main className="bg-gray-50 select-none">
            <div className="z-50 bg-opacity-0 fixed bottom-0 w-full">
                {width > 768 && ["首頁", "基本資料", "經歷", "聯絡方式"].map((text, cnt) => (
                    <NavigateCard text={text} key={text} className={clsx(
                        "animate-appear",
                        isInPage(positionYPercentage, cnt + 1) || "hidden"
                    )} />
                ))}
                {width > 768 || ["首頁", "基本資料", "基本資料", "經歷", "經歷", "聯絡方式"].map((text, cnt) => (
                    <NavigateCard text={text} key={cnt} className={clsx(
                        "animate-appear",
                        isInPage(positionYPercentage, cnt + 1) || "hidden"
                    )} />
                ))}
            </div>
            <section className={clsx(
                css.page,
                'flex flex-row')}>
                {/* First Section */}
                <div className={clsx(
                    'md:w-1/2 w-full h-full flex flex-col justify-center space-y-5 px-20 bg-gradient-to-b from-gray-100 to-gray-50',
                    isInPage(positionYPercentage, 1) ? "absolute" : "hidden"
                )}>
                    <div style={{
                        translate: `0 -${positionCalculator(positionYPercentage, 30, 1)}vh`,
                        opacity: opacityCalculator(positionYPercentage, 1)
                    }} className='fixed'>
                        <h1 className='text-8xl'>
                            Milliax
                        </h1>
                        <p className='text-xl text-green-700'>
                            Keep Promises | Team Taiwan
                        </p>
                    </div>
                </div>
                <div className='h-full flex flex-col justify-end pb-40 text-2xl absolute z-50 right-0 w-1/2'>
                    <div className='text-xs self-end pr-5 text-slate-400'
                        style={{
                            opacity: fadeInCalculator(positionYPercentage, 1, 0, 5) / 100
                        }}
                    >
                        原本我的英文名字是 Max<br />
                        但這樣太普通了不像我<br />
                        所以我自己在中間加一些字<br />
                        最後變成 Milliax<br />
                        但有時候會變形成 Milliacs<br />
                    </div>
                </div>
            </section>
            <section className={clsx('flex md:flex-row flex-col md:h-screen h-[200vh]')}>
                {/* Second Section */}
                <div className={clsx(
                    'md:w-1/2 w-full md:h-full h-screen flex flex-col justify-start space-y-5 px-20 pt-40 z-10',
                )}>
                    <div className=''>
                        <h1 className={clsx(
                            'text-4xl font-bold',
                        )}
                            style={{
                                translate: `-${fadeInCalculator(positionYPercentage, 2, 50, 20)}vh 0`
                            }}
                        >
                            Characteristics
                        </h1>
                        <div className='md:pt-32 pt-12 space-y-5'
                            style={{ opacity: 1 - fadeInCalculator(positionYPercentage, 2, 20, 10) / 100 }}
                        >
                            <p>ESFJ？</p>
                            <p>日劇、動漫追好追滿</p>
                            <p>3C 控 、 看到可以過得更舒適的東西就會控制不住自己</p>
                            <p>Taylor Swift - Back To December</p>
                        </div>
                    </div>
                </div>
                <div className={clsx(
                    'md:w-1/2 w-full md:h-full h-screen flex flex-col justify-start md:pt-52 pt-24 px-20 text-2xl right-0 bg-gradient-to-b from-gray-50 to-gray-100',
                    (width > 768) ?
                        isInPage(positionYPercentage, 3) ? "fixed top-0" : "absolute"
                        :
                        isInPage(positionYPercentage, 2) ? "fixed top-0" : "absolute"
                    ,
                )}
                    style={{
                        translate: `0 -${positionCalculator2(positionYPercentage, 20, 10, (width > 768) ? 2 : 3)}vh`,
                        opacity: fadeInCalculator(positionYPercentage, (width > 768) ? 2 : 3, 10, 50) / 100
                    }}>
                    <h1 className="text-3xl font-bold"
                        style={{
                            translate: `${fadeInCalculator(positionYPercentage, (width > 768) ? 2 : 3, 40)}vh 0`
                        }}>
                        Skills
                    </h1>
                    <div className={clsx(
                        'relative h-full w-full ml-10 mb-20 mt-5 rounded text-7xl',
                    )}
                        style={{ opacity: 1 - fadeInCalculator(positionYPercentage, (width > 768) ? 2 : 3, 10, 5) / 100 }}
                    >
                        <div className='absolute top-0 right-1/3'>
                            <SiReact />
                        </div>
                        <div className='absolute left-0 top-1/2'>
                            <SiNextdotjs />
                        </div>
                        <div className='absolute left-0 bottom-0'>
                            <SiTailwindcss />
                        </div>
                        <div className='absolute top-1/2 right-1/4'>
                            <FaSwimmer />
                        </div>
                        <div className='absolute top-2/3 right-0'>
                            <SiTypescript />
                        </div>
                    </div>
                </div>
            </section>
            <section className={clsx('flex md:flex-row flex-col h-[200vh] md:h-screen')}>
                {/* Third Section */}
                <div className={clsx(
                    'md:w-1/2 w-full md:h-full h-screen flex flex-col justify-start py-80 bg-gradient-to-b from-gray-100 to-gray-50 space-y-5 px-20',
                )}>
                    <div className=''>
                        <h1 className='text-7xl'>
                            Position
                        </h1>
                        <div className={clsx(
                            'p-10 flex flex-row justify-end'
                        )}>
                            <div className={clsx(
                                'w-[50vmin] h-[50vmin] grid grid-cols-2 gap-5 text-lg md:grid-cols-1',
                            )}>
                                <div className='card' style={{ lineBreak: 'strict' }}>
                                    陽明交通大學<br />
                                    工業工程與管理學系
                                </div>
                                <div className='card'>
                                    台南第一高級中學
                                </div>
                                <div className='card'>
                                    陽明交大<br />
                                    工工系學會長
                                </div>
                                <div className='card'>
                                    台南一中<br />
                                    選委會副委
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 w-full md:h-full h-screen flex flex-col justify-end pb-32 text-2xl absolute right-0 px-20 space-y-5 z-10'
                    style={{
                        opacity: 1 - fadeInCalculator(positionYPercentage, (width > 768) ? 3 : 5, 0, 10) / 100,
                        translate: `-${fadeInCalculator(positionYPercentage, (width > 768) ? 3 : 5, 20)}vh 0`
                    }}
                >
                    <h1 className='text-5xl'>
                        Projects
                    </h1>
                    <div className=''>
                        <li>
                            Guider
                        </li>
                        <li>
                            NYCU IEM SA website
                        </li>
                        <li>
                            tnfsh lunch ordering
                        </li>
                        <li>
                            improving database via crypto. (TANET)
                        </li>
                        <li>
                            Automatic Curtain Works With Google
                        </li>
                    </div>
                </div>
            </section>
            <section className={clsx(css.page, 'flex flex-row')}>
                {/* Forth Section */}
                <div className={clsx(
                    'w-full h-full flex flex-col justify-center bg-gradient-to-b from-gray-100 to-gray-50 space-y-5 px-20',
                )}>
                    <div className='w-full h-full py-20 space-y-20'>
                        <h1 className='text-6xl '>
                            Keep In touch
                        </h1>
                        <div className='text-xl space-y-10'>

                            <h2>
                                email:
                                <Link href="mailto:milliax.mg11@nycu.edu.tw" className='hyperlink'>
                                    milliax.mg11@nycu.edu.tw
                                </Link>
                            </h2>
                            <div className='text-4xl flex flex-row space-x-10'>
                                {/* social accounts */}
                                <Link href="https://facebook.com/milliacs" passHref>
                                    <div className='w-20 aspect-square relative'>
                                        <Image src="/logos/facebook.png" alt="Icon of Facebook" fill />
                                    </div>
                                </Link>
                                <Link href="https://twitter.com/milliacs">
                                    <div className='w-20 aspect-square relative'>
                                        <Image src="/logos/twitter.png" alt="Icon of Facebook" fill />
                                    </div>
                                </Link>
                                <Link href="https://instagram.com/milliacs">
                                    <div className='w-20 aspect-square relative'>
                                        <Image src="/logos/instagram.png" alt="Icon of Facebook" fill />
                                    </div>
                                </Link>
                            </div>
                            <h2>My Place: Somewhere In Brooklyn</h2>
                        </div>
                    </div>
                </div>

            </section>
        </main >
    )
}
