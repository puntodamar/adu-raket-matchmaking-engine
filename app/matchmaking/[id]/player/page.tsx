'use client';

import Heading from "@/components/Heading";
import {Field, FieldLabel,} from "@/components/ui/field";
import React, {useState} from "react";
import {SKILL_LEVELS, SkillLevel, useSessionStore} from "@/src/store/useSessionStore";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {UserRoundPlus} from "lucide-react";
import { Button } from "@/components/ui/button"

export default function CreatePlayer() {
    let currentSession = useSessionStore((state) => state.currentSession);
    
    const [playerName, setPlayerName] = useState('');
    const [playerLevel, setPlayerLevel] = useState<SkillLevel>('Pemula');
    const fruits = [
        { value: "1", label: "Pemula" },
        { value: "2", label: "Pra-Menengah" },
        { value: "3", label: "Menengah" },
        { value: "4", label: "Menegah-Atas" },
        { value: "5", label: "Pro" },
    ];
    const [selectedFruit, setSelectedFruit] = useState<string | null>("banana");
    const handleSubmit = () => {
    
    }
    
    return (
        <div className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col items-center justify-center">
                <Heading>Tambah Pemain</Heading>
                {/* Added flex flex-col so gap-y-4 works between Fields */}
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
                            <Select value={selectedFruit} onValueChange={setSelectedFruit}>
                                {/* Added text-center and w-full to the trigger */}
                                <SelectTrigger className="w-full cursor-pointer bg-white justify-center text-center" showIcon={false}>
                                    <SelectValue  className="w-full text-center" >
                                        {fruits.find((fruit) => fruit.value === selectedFruit)?.label}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {fruits.map((fruit) => (
                                            <SelectItem
                                                key={fruit.value}
                                                value={fruit.value}
                                                className="text-xs font-medium hover:bg-accent/50 hover:text-white data-[highlighted]:bg-accent/50 data-[highlighted]:text-white"
                                            >
                                                {fruit.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </Field>
                    
                    
                    
                    <Button className={'hover:cursor-pointer hover:bg-accent mt-2 bg-primary flex flex-row gap-x-2 items-center justify-center p-2 rounded-lg text-white text-sm'}>
                        <UserRoundPlus data-icon="inline-start" size={16}  /> Tambah
                    </Button>
                </form>
            </div>
        </div>
    
    )
}