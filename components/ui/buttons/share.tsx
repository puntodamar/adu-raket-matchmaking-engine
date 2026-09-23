"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Share2 } from "lucide-react";

export function ShareButton({ fullUrl }: { fullUrl: string }) {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        // 1. Try using the native mobile/browser Share API first if available
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Share Kode Admin",
                    text: "Gunakan link ini untuk bergabung sebagai admin:",
                    url: fullUrl,
                });
                return;
            } catch (error) {
                // If user cancels or share fails, fallback to copy below
                console.log("Share canceled or failed", error);
            }
        }

        // 2. Fallback: Copy to clipboard if navigator.share isn't supported or fails
        try {
            await navigator.clipboard.writeText(fullUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset text/icon after 2 seconds
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <Button
            variant="outline"
            onClick={handleShare}
            className="hover:cursor-pointer flex items-center gap-2 w-full justify-start overflow-hidden">
            {copied ? (
                <Check className="shrink-0 h-4 w-4 text-green-500" />
            ) : (
                <Share2 className="shrink-0 h-4 w-4" />
            )}

            <span className="max-w-[280px] truncate block text-left text-xs">
                {copied ? "Tersalin ke clipboard!" : fullUrl}
            </span>
        </Button>
    );
}