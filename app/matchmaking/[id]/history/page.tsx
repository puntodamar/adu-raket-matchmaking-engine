"use client";

import Heading from "@/components/Heading";
import React from "react";
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {Swords} from "lucide-react";
import BackButton from "@/components/ui/buttons/back";
import {useSessionStore} from "@/src/store/useSessionStore";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MatchHistoryPage() {

    const history = useSessionStore((state) => state.history);

    return (
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center w-full p-4">
            <div className="flex flex-col items-center w-full max-w-md my-auto">

                <Heading className="mb-6">History</Heading>

                <div className="w-full mb-4">
                    <ScrollArea className="h-[55vh] w-full px-2">
                        <div className={`w-full ${history.length > 4 ? "grid grid-cols-2" : "flex flex-row flex-wrap justify-center gap-4"}`}>
                            {history.map((h, index) => (
                                <Card key={index} className="border-primary m-2">
                                    <CardContent className="flex flex-row gap-x-2 items-center justify-center">
                                        <div className="text-xs flex flex-col gap-y-1 font-medium justify-center items-center text-center">
                                            <span>{h[0][0].name}</span> <span>{h[0][1].name}</span>
                                        </div>

                                        <Swords size={16} className="text-coral" />
                                        <div className="text-xs flex flex-col gap-y-1 font-medium justify-center items-center text-center">
                                            <span>{h[1][0].name}</span> <span>{h[1][1].name}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </ScrollArea>
                </div>

                <BackButton fullWidth={true} className="mt-2" />
            </div>
        </div>
    )
}