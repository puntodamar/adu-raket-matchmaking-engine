'use client';

import React from "react";
import {useSessionStore} from "@/src/store/useSessionStore";
import Heading from "@/components/Heading";
import {Copy, FileClock, Logs, Share2, Sparkles, Swords, UserRoundPlus} from "lucide-react";
import Link from "next/link";
import DefaultButton from "@/components/ui/buttons/default";
import {DefaultDialogCloseButton} from "@/components/ui/dialogs/default";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {ShareButton} from "@/components/ui/buttons/share";

export default function MatchmakingSession() {
    let currentSession = useSessionStore((state) => state.currentSession);
    const createSession = useSessionStore((state) => state.createSession)
    const pathname = usePathname();
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    const fullUrl = `${baseUrl}${pathname}`;

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

                    <div className="mt-2 border-t border-coral pt-2 w-full max-w-md">
                        <DefaultDialogCloseButton
                            title={"Share Kode Admin"}
                            description={"Bagikan kode ke admin lain untuk membantu mengelola sesi."}
                            trigger={
                                <DefaultButton className="w-full">
                                    <span className="inline-flex items-center gap-x-2">
                                        <span className="inline-flex items-center gap-x-2">
                                            <Share2 data-icon="inline-start" size={16} />
                                        </span>
                                        <span>Share Kode Admin</span>
                                    </span>
                                </DefaultButton>}>
                                <div className="flex flex-row gap-x-2 w-full items-center">
                                    <ShareButton fullUrl={fullUrl} />
                            </div>
                        </DefaultDialogCloseButton>
                    </div>

                </div>
            </div>
        </div>
    )
}