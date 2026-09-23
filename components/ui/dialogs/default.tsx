import React from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import DefaultButton from "@/components/ui/buttons/default";

interface CustomDialogProps {
    title: string;
    description: string;
    trigger: React.ReactElement;
    children?: React.ReactNode;
}

export function DefaultDialogCloseButton({ title, description, trigger, children }: CustomDialogProps) {
    return (
        <Dialog>
            <DialogTrigger render={trigger} />
            {/* Added overflow-hidden and box-border to prevent the modal box itself from breaking out */}
            <DialogContent className="w-[90vw] max-w-md overflow-hidden box-border">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {/* Added max-w-full to force text wrap */}
                    <DialogDescription className="text-xs break-words overflow-hidden max-w-full">
                        {description}
                    </DialogDescription>
                </DialogHeader>

                {/* Safety wrapper for children content so anything inside (like long text/URLs) respects boundaries */}
                <div className="w-full max-w-full overflow-hidden my-2">
                    {children}
                </div>

                <DialogFooter className="sm:justify-start">
                    <DialogClose render={<DefaultButton fullWidth={false}>Tutup</DefaultButton>} />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}