'use client';

import React from "react";
import {useSessionStore} from "@/src/store/useSessionStore";
import Heading from "@/components/Heading";
import {Button} from "@base-ui/react";
import {FileClock, Logs, Sparkles, Swords, UserRoundPlus} from "lucide-react";
import Link from "next/link";

export default function MatchmakingSession() {
    let currentSession = useSessionStore((state) => state.currentSession);
    const createSession = useSessionStore((state) => state.createSession)
    
    const buttonClass = "hover:cursor-pointer hover:bg-accent mt-2 bg-primary w-full flex flex-row gap-x-2 items-center justify-center p-2 rounded-lg text-white text-sm"
    if(!currentSession) {
        currentSession = createSession({name: "PB. Goodminton"})
    }
    
    return (
        <div className="flex flex-1 flex-col">
            
            <div className="flex flex-1 flex-col items-center justify-center">
                <Heading>{currentSession.name}</Heading>
                
                <div className="flex flex-col gap-y-2 mt-10">
                    <Button className={buttonClass}>
                        <Link href={`/matchmaking/${currentSession.uuid}/player`} className="inline-flex items-center gap-x-2">
                            <span className="inline-flex items-center">
                                <UserRoundPlus data-icon="inline-start" size={16} />
                            </span>
                            <span>Tambah Pemain</span>
                        </Link>
                    </Button>
                    
                    <Link href={`/matchmaking/${currentSession.uuid}/list`} className={buttonClass}>
                        <span className="inline-flex items-center gap-x-2">
                            <span className="inline-flex items-center">
                                <Logs data-icon="inline-start" size={16} />
                            </span>
                            <span>Presensi</span>
                        </span>
                    </Link>
                    
                    <Button className={buttonClass}>
                        <span className="inline-flex items-center gap-x-2">
                            <span className="inline-flex items-center">
                                <FileClock data-icon="inline-start" size={16} />
                            </span>
                            <span>History</span>
                        </span>
                    </Button>
                    
                    <Button className={`${buttonClass} bg-secondary hover:bg-accent`}>
                        <span className="inline-flex items-center gap-x-2">
                            <span className="inline-flex items-center">
                                <Swords data-icon="inline-start" size={16} />
                            </span>
                            <span>Buat Matchmaking</span>
                        </span>
                    </Button>
                    

                
                </div>
            </div>
        </div>

    )
}