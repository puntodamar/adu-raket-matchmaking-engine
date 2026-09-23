'use client';

import Heading from "@/components/Heading";
import { Field, FieldLabel } from "@/components/ui/field";
import React, { useState } from "react";
import { SKILL_LEVELS, SkillLevel, useSessionStore } from "@/src/store/useSessionStore";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { UserRoundPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CreatePlayer() {
    let currentSession = useSessionStore((state) => state.currentSession);
    const buttonClass = "hover:cursor-pointer hover:bg-accent flex flex-row gap-x-2 items-center justify-center p-2 rounded-lg bg-coral text-white text-sm hover:text-white";

    const router = useRouter();
    const [playerName, setPlayerName] = useState('');
    const [playerLevel, setPlayerLevel] = useState<SkillLevel>('Pemula');

    const handleSubmit = (e: React.FormEvent) => {
    }

    return (
        <div className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col items-center justify-center">
                <Heading>Tambah Pemain</Heading>
                <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-y-4 w-full max-w-xs">
                    <Field className="mx-auto flex w-full flex-col gap-y-1">
                        <FieldLabel
                            htmlFor="input-player-name"
                            className="w-full justify-center text-center font-semibold">
                            Nama
                        </FieldLabel>

                        <Input
                            id="input-player-name"
                            type="text"
                            value={playerName}
                            required={true}
                            onChange={(e) => setPlayerName(e.target.value)}
                            className="input-field"
                        />
                    </Field>

                    <Field className="mx-auto flex w-full flex-col gap-y-1">
                        <FieldLabel
                            htmlFor="select-player-level"
                            className="w-full justify-center text-center font-semibold">
                            Level Bermain
                        </FieldLabel>

                        <div className="relative w-full">
                            <Select value={playerLevel} onValueChange={(val) => setPlayerLevel(val as SkillLevel)}>
                                <SelectTrigger className="w-full cursor-pointer bg-white justify-center text-center" showIcon={false}>
                                    <SelectValue className="w-full text-center">
                                        {playerLevel}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {SKILL_LEVELS.map((level) => (
                                            <SelectItem
                                                key={level}
                                                value={level}
                                                className="text-xs font-medium hover:bg-accent/50 hover:text-white data-[highlighted]:bg-accent/50 data-[highlighted]:text-white">
                                                {level}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </Field>

                    <div className="flex flex-row items-center gap-x-2 pt-3 mt-3 border-t border-coral/50">
                        <BackButton />
                        <DefaultButton color={"bg-coral"}>
                            <UserRoundPlus data-icon="inline-start" size={16} /> Tambah
                        </DefaultButton>
                    </div>
                </form>
            </div>
        </div>
    );
}