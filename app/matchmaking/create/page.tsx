import {Field, FieldLabel,} from "@/components/ui/field";
import {Input} from "@/components/ui/input"
import {Sparkles} from "lucide-react";
import { Button } from "@/components/ui/button"

export default function CreateMatchmaking() {
    return (
        <div className="flex flex-1 items-center justify-center">
            <div className="flex flex-col gap-y-3">
                <h1 className="text-heading mb-10 text-center">
                    Buat Matchmaking
                </h1>
                
                <Field className="mx-auto flex max-w-100 flex-col">
                    <FieldLabel
                        htmlFor="input-session-name"
                        className="w-full justify-center text-center">
                        Nama sesi
                    </FieldLabel>
                    
                    <Input
                        id="input-session-name"
                        type="text"
                        className="input-field placeholder:text-center placeholder:text-xs focus-visible:border-accent focus-visible:ring-accent/30 bg-white"
                        placeholder="PB. Berbagi Senyum"
                    />
                </Field>
                
                <Button className={"hover:cursor-pointer mt-2 bg-coral"}>
                    <Sparkles data-icon="inline-start" /> Mulai
                </Button>
            </div>
        </div>
    
    )
}