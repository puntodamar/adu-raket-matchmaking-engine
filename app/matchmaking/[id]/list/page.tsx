"use client"

import Heading from "@/components/Heading";
import { Star} from "lucide-react";
import {Button} from "@base-ui/react";
import React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PlayerList() {
    const router = useRouter();
    const players = [
        {name: "Budi", level: "1", matchPlayed: 2},
        {name: "Andi", level: "2", matchPlayed: 5},
        {name: "Citra", level: "3", matchPlayed: 3},
        {name: "Dewi", level: "4", matchPlayed: 4},
        {name: "Eko", level: "5", matchPlayed: 1},
        {name: "Fajar", level: "2", matchPlayed: 6},
        {name: "Gita", level: "3", matchPlayed: 2},
        {name: "Hadi", level: "1", matchPlayed: 7},
        {name: "Indah", level: "4", matchPlayed: 3},
        {name: "Joko", level: "5", matchPlayed: 5},
        {name: "Kiki", level: "3", matchPlayed: 4},
        {name: "Lina", level: "2", matchPlayed: 2},
        {name: "Mira", level: "1", matchPlayed: 6},
    ]
    const buttonClass = "hover:cursor-pointer hover:bg-accent mt-2 bg-primary w-full flex flex-row gap-x-2 items-center justify-center p-2 rounded-lg text-white text-sm";
    
    return (
        <div className="flex flex-1 flex-col items-center w-full">
            <div className="flex flex-1 flex-col items-center justify-center w-full max-w-md">
                <Heading>Presensi</Heading>
                
                {/* Replaced <ul> with a div container matching the max-w-md and fixed height */}
                <div className="mt-4 w-full max-h-80">
                    <ScrollArea className="h-full w-full rounded-md border p-4">
                        {players.sort((a, b) => a.name.localeCompare(b.name)).map((player, index) => (
                            <div key={index} className="flex justify-between p-2 border-b">
                                <div className="flex flex-row gap-x-2 items-center">
                                    <span className="text-sm">{player.name}</span>
                                    <span className="text-[8px] text-gray-400">({player.matchPlayed}x main)</span>
                                </div>
                                <div className="flex flex-row">
                                    {Array.from({ length: parseInt(player.level) }).map((_, i) => (
                                        <span key={i}><Star size={16} /></span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </ScrollArea>
                </div>
            </div>
            
            <Button onClick={() => router.back()} className={cn(buttonClass, "max-w-md mt-10")}>
            <span className="inline-flex items-center gap-x-2">
                <span>Kembali</span>
            </span>
            </Button>
        </div>
    )
}