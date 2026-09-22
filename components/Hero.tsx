'use client'

import {Sparkles, Swords, X} from 'lucide-react'
import Link from "next/link";
import Image from "next/image";
import logoAsset from '@/public/logo.png';

export default function Hero() {
    return (
        /* Added flex flex-col justify-center flex-1 so it takes up the available space and centers content vertically */
        <div className="flex flex-col justify-center flex-1 w-full">
            <div className="relative isolate px-6 lg:px-8">
                <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <Image
                        alt="AduRaket Logo"
                        src={logoAsset}
                        className="size-25 object-contain mx-auto animate-fade-in-up mb-5"
                    />
                    <div>
                        <h1 className="animate-fade-in-up [--animation-delay:500ms] text-5xl font-semibold tracking-tight text-balance text-coral sm:text-7xl">
                            AduRaket
                        </h1>
                        <p className="animate-fade-in-up [--animation-delay:500ms] mt-8 text-sm font-medium text-pretty text-gray-900 lg:text-lg">
                            Kelola banyak peserta sesi badminton dengan lebih mudah! <br/>
                            <span className={"font-semibold text-coral"}>AduRaket</span> membantu host menyusun matchup yang seimbang, cepat, dan praktis untuk setiap sesi permainan.
                        </p>
                        <div className="animate-fade-in-up [--animation-delay:1000ms] mt-10 flex items-center justify-center gap-x-6">
                            <Link href={`/matchmaking/create`}
                                  className="inline-flex items-center rounded-md bg-primary hover:bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 hover:cursor-pointer">
                                <div className="inline-flex items-center gap-x-2">
                                    <Swords size={16} />
                                    <span>Mulai Matchmaking</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}