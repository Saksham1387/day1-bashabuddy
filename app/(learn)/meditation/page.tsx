"use client"
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import "./page.css"
import { useEffect } from "react";
import AnimatedCircle from "./animation";
import TimerComponent from "./timer";

const meditation = () => {
    return (
        <>
        <div className="text-5xl font-bold text-orange-500 text-center mt-10 flex flex-row gap-96 " >
            <Button variant="primary">Back</Button>
            Meditate
        </div>
        <div className="ml-[450px] mt-[300px]">
            <TimerComponent></TimerComponent>
        </div>
        </>
    )
}
export default meditation