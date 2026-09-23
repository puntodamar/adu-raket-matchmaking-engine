'use client';

import React from "react";
import {useSessionStore} from "@/src/store/useSessionStore";
import Heading from "@/components/Heading";
import {Button} from "@base-ui/react";
import {FileClock, Logs, Sparkles, Swords, UserRoundPlus} from "lucide-react";
import Link from "next/link";
import DefaultButton from "@/components/ui/buttons/default";

export default function MatchmakingSession() {
    let currentSession = useSessionStore((state) => state.currentSession);
    const createSession = useSessionStore((state) => state.createSession)

    if(!currentSession) {
        currentSession = createSession({name: "PB. Goodminton"})
    }

    return (
        <div className="flex flex-1 flex-col mx-auto">
            <div className="flex flex-1 flex-col items-center justify-center max-w-md mx-auto w-full p-4">
                <Heading>{currentSession.name}</Heading>

                <div className="flex flex-col items-center w-full gap-y-3 mt-10">

                    <DefaultButton className="w-full max-w-xs">
                        <Link href={`/matchmaking/${currentSession.uuid}/player`} className="w-full flex items-center justify-center">
                        <span className="inline-flex items-center gap-x-2">
                            <span className="inline-flex items-center gap-x-2">
                                <UserRoundPlus data-icon="inline-start" size={16} />
                            </span>
                            <span>Tambah Pemain</span>
                        </span>
                        </Link>
                    </DefaultButton>

                    <DefaultButton className="w-full max-w-xs">
                        <Link href={`/matchmaking/${currentSession.uuid}/list`} className="w-full flex items-center justify-center">
                        <span className="inline-flex items-center gap-x-2">
                            <span className="inline-flex items-center gap-x-2">
                                <Logs data-icon="inline-start" size={16} />
                            </span>
                            <span>Presensi</span>
                        </span>
                        </Link>
                    </DefaultButton>

                    <DefaultButton className="w-full max-w-xs">
                        <Link href={`/matchmaking/${currentSession.uuid}/history`} className="w-full flex items-center justify-center">
                        <span className="inline-flex items-center gap-x-2">
                            <span className="inline-flex items-center gap-x-2">
                                <FileClock data-icon="inline-start" size={16} />
                            </span>
                            <span>History</span>
                        </span>
                        </Link>
                    </DefaultButton>

                    <DefaultButton color={'bg-secondary'} className="w-full max-w-xs">
                    <span className="inline-flex items-center gap-x-2">
                        <span className="inline-flex items-center gap-x-2">
                            <Swords data-icon="inline-start" size={16} />
                        </span>
                        <span>Buat Matchmaking</span>
                    </span>
                    </DefaultButton>

                </div>
            </div>
        </div>
    )
}