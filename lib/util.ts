// import { useCallback } from "react";

// const totalSectionRef = useRef<number>(2);
let totalSection = 1;

export const isInPage = (position: number, page: number): boolean => {
    const percentage = percentageInPage(position, page);
    if (percentage < 150 && percentage >= -50) {
        return true;
    }
    return false;
}

export const percentageInPage = (position: number, page: number) => {
    // const value = position * totalSection - (page - 1) * 100;
    const value = position - (page - 1) * 100;
    // process.env.NODE_ENV === "development" && console.log("percentage in page: ", value);
    return value;
}

export const positionCalculator = (position: number, hush: number, page: number): number => {
    const value = (Math.max(percentageInPage(position, page), hush) - hush) / (100 - hush) * 100;
    // process.env.NODE_ENV === "development" && console.log("movement: ", value)
    return value;
}

export const positionCalculator2 = (position: number, hush_from: number, hush_end: number, page:number) => {
    const value = (1);
    return value;
}

export const opacityCalculator = (position: number, page: number) => {
    const value = Math.max(100 - percentageInPage(position, page), 0);
    // process.env.NODE_ENV === "development" && console.log("opacity: ", value);
    return value / 100;
}

export const fadeInCalculator = (position: number, page: number, padding?: number, speed?: number) => {
    const percentInPage = percentageInPage(position, page);

    // 0 - 30 move rest fixed over 100 remove fixed
    // 100 to 0
    const value = 100 - (Math.min(percentInPage + (padding ?? 0), (speed ?? 30)) / (speed ?? 30) * 100);

    // process.env.NODE_ENV === "development" && console.log("percentage in page: ", percentInPage);
    // process.env.NODE_ENV === "development" && console.log("translate: ", value);
    return value;
}

export default (sections: number) => {
    // totalSectionRef.current = sections;
    totalSection = sections
}