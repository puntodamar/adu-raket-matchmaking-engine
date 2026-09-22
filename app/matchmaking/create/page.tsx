'use client';

import {Field, FieldLabel,} from "@/components/ui/field";
import {Input} from "@/components/ui/input"
import {Sparkles} from "lucide-react";
import { Button } from "@/components/ui/button"
import {useSessionStore} from "@/src/store/useSessionStore";
import React, { useState} from "react";
import {useRouter} from "next/navigation";
import Heading from "@/components/Heading";



export default function CreateMatchmaking() {
    
    const router = useRouter();
    const createSession = useSessionStore((state) => state.createSession);
    
    const [sessionName, setSessionName] = useState('')
    
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        const session = createSession({name: sessionName})
        
        router.push(`/matchmaking/${session.uuid}`)
    }
    return (
        <div className="flex flex-1 items-center justify-center">
            <div className="flex flex-col gap-y-3">
                <Heading>Buat Matchmaking</Heading>
                
                <form onSubmit={handleSubmit} className={"mt-5"}>
                    <Field className="mx-auto flex max-w-100 flex-col">
                        <FieldLabel
                            htmlFor="input-session-name"
                            className="w-full justify-center text-center font-semibold">
                            Nama sesi
                        </FieldLabel>
                        
                        <Input
                            id="input-session-name"
                            type="text"
                            value={sessionName}
                            onChange={(e) => setSessionName(e.target.value)}
                            className="input-field placeholder:text-center text-center placeholder:text-xs focus-visible:border-accent focus-visible:ring-accent/30 bg-white"
                            placeholder="PB. Berbagi Senyum"
                        />
                    </Field>
                    <Button type="submit" className={"hover:cursor-pointer mt-2 bg-primary w-full"}>
                        {/*<Link href="/matchmaking/example" className={"w-full flex flex-row gap-x-2 items-center justify-center"}>*/}
                        {/*    <Sparkles data-icon="inline-start" /> Mulai*/}
                        {/*</Link>*/}
                        
                        <Sparkles data-icon="inline-start" size={10} /> <span className="text-xs">Mulai</span>
                    
                    </Button>
                </form>

            </div>
        </div>
    
    )
}