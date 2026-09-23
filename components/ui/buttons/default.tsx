import {Button} from "@/components/ui/button";
import React from "react";
import {cn} from "@/lib/utils";

interface SubmitButtonProps {
    color?: string;
    children: React.ReactNode;
    onClick?: () => void;
    fullWidth?: boolean;
    className?: string;
}

export default function DefaultButton({children, onClick, fullWidth = true, className, color = 'bg-primary'}: SubmitButtonProps) {
    return (
        <div className={cn(fullWidth ? "w-full max-w-md" : "w-auto")}>
            <Button
                type="submit"
                onClick={onClick}
                className={cn(
                    `hover:cursor-pointer hover:opacity-90 ${color} hover:${color}/90 w-full h-10 flex flex-row gap-x-2 items-center justify-center px-2 py-2 rounded-lg font-medium text-white text-sm transition-opacity`,
                    className
                )}>
                {children}
            </Button>
        </div>
    );
}