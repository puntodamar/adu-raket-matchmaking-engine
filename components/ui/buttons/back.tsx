import {Button} from "@base-ui/react";
import React from "react";
import {useRouter} from "next/navigation";
import {cn} from "@/lib/utils";

export default function BackButton({fullWidth = false, className}: {fullWidth?: boolean, className?: string}) {
    const router = useRouter();
    return (
        <div className={cn(fullWidth ? "w-full max-w-md" : "w-auto")}>
            <Button onClick={() => router.back()} className={cn("hover:cursor-pointer hover:opacity-90 bg-primary w-full flex flex-row gap-x-2 items-center justify-center p-2 rounded-lg text-white text-sm font-medium transition-opacity", className)}>
                <span className="inline-flex items-center gap-x-2">
                    <span>Kembali</span>
                </span>
            </Button>
        </div>
    );
}