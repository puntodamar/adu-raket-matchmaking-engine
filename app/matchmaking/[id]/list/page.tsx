"use client"

import Heading from "@/components/Heading";
import { Star } from "lucide-react";
import { Button } from "@base-ui/react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter } from "next/navigation";
import { useSessionStore } from "@/src/store/useSessionStore";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PlayerListPage() {
    const router = useRouter();
    const players = useSessionStore((state) => state.players);
    const [sortBy, setSortBy] = useState("name");

    const buttonClass = "hover:cursor-pointer hover:bg-accent mt-2 bg-primary w-full flex flex-row gap-x-2 items-center justify-center p-2 rounded-lg text-white text-sm";

    const sortedPlayers = [...players].sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "skill") return b.level - a.level;
        if (sortBy === "matchPlayed") return b.matchPlayed - a.matchPlayed;
        return 0;
    });

    return (
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center w-full p-4">
            <div className="flex flex-col items-center w-full max-w-md h-[80vh] max-h-[480px] md:h-[80vh] md:max-h-full">
                <Heading>Presensi</Heading>

                <div className="mt-4 w-full flex flex-col gap-y-2 items-center justify-center">
                    <RadioGroup
                        value={sortBy}
                        onValueChange={setSortBy}
                        className="flex flex-row gap-x-6 text-xs justify-center items-center">
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="name" id="r1" />
                            <Label htmlFor="r1" className="text-xs cursor-pointer">Nama</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="skill" id="r2" />
                            <Label htmlFor="r2" className="text-xs cursor-pointer">Skill</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="matchPlayed" id="r3" />
                            <Label htmlFor="r3" className="text-xs cursor-pointer">Jumlah Main</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="mt-4 w-full flex-1 min-h-0">
                    <ScrollArea className="h-full w-full rounded-md border p-4">
                        {sortedPlayers.map((player, index) => (
                            <div key={index} className="flex justify-between items-center p-2 border-b last:border-b-0">
                                <div className="flex flex-row gap-x-2 items-center">
                                    <span className="text-sm font-medium">{player.name}</span>
                                    <span className="text-[10px] text-gray-400">({player.matchPlayed}x main)</span>
                                </div>
                                <div className="flex flex-row gap-x-1">
                                    {Array.from({ length: player.level }).map((_, i) => (
                                        <span key={i}><Star size={12} className="fill-yellow-400 text-yellow-400" /></span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </ScrollArea>
                </div>

                <Button onClick={() => router.back()} className={cn(buttonClass, "mt-4")}>
                    <span className="inline-flex items-center gap-x-2">
                        <span>Kembali</span>
                    </span>
                </Button>
            </div>
        </div>
    )
}