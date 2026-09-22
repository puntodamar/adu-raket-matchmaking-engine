import Heading from "@/components/Heading";
import React from "react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Swords} from "lucide-react";

export default function MatchHistoryPage() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center w-full p-4">
            <div className="flex flex-col items-center w-full max-w-md h-[80vh] max-h-[480px] md:h-[80vh] md:max-h-full">
                <Heading>History</Heading>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <Card className="border-primary">
                    <CardContent className="flex flex-col gap-y-2 items-center">
                        <div className="text-xs flex flex-row gap-x-2"><span>Budi</span> <span>Tomi</span></div>
                        <Swords size={16} />
                        <div className="text-xs flex flex-row gap-x-2"><span>Wawan</span> <span>Indra</span></div>
                    </CardContent>
                </Card>
                <Card className="border-primary">
                    <CardContent className="flex flex-col gap-y-2 items-center">
                        <div className="text-xs flex flex-row gap-x-2"><span>Budi</span> <span>Tomi</span></div>
                        <Swords size={16} />
                        <div className="text-xs flex flex-row gap-x-2"><span>Wawan</span> <span>Indra</span></div>
                    </CardContent>
                </Card>
                <Card className="border-primary">
                    <CardContent className="flex flex-col gap-y-2 items-center">
                        <div className="text-xs flex flex-row gap-x-2"><span>Budi</span> <span>Tomi</span></div>
                        <Swords size={16} />
                        <div className="text-xs flex flex-row gap-x-2"><span>Wawan</span> <span>Indra</span></div>
                    </CardContent>
                </Card>
                <Card className="border-primary">
                    <CardContent className="flex flex-col gap-y-2 items-center">
                        <div className="text-xs flex flex-row gap-x-2"><span>Budi</span> <span>Tomi</span></div>
                        <Swords size={16} />
                        <div className="text-xs flex flex-row gap-x-2"><span>Wawan</span> <span>Indra</span></div>
                    </CardContent>
                </Card>
            </div>
            </div>

        </div>
    )
}