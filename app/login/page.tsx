'use client';

import Heading from "@/components/Heading";
import {Field, FieldLabel} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {LogIn} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {useUserStore} from "@/src/store/useUserStore";

export default function LoginPage() {
    const router = useRouter();
    const setUser = useUserStore(state => state.setUser);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    
    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setUser({ username: formData.username });
        router.push(`/matchmaking/create`);
    };
    
    const fields = [
        { id: 'username', label: 'Username', type: 'text', placeholder: 'pb.berbagisenyum' },
        { id: 'password', label: 'Password', type: 'password', placeholder: '••••••••' }
    ];
    
    return (
        <div className="flex flex-1 items-center justify-center">
            <div className="flex flex-col gap-y-3 w-full max-w-sm px-4">
                <Heading>Login</Heading>
                
                <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-y-4">
                    {fields.map((field) => (
                        <Field key={field.id} className="mx-auto flex w-full flex-col">
                            <FieldLabel
                                htmlFor={`input-${field.id}`}
                                className="w-full justify-center text-center font-semibold">
                                {field.label}
                            </FieldLabel>
                            
                            <Input
                                id={`input-${field.id}`}
                                type={field.type}
                                value={formData[field.id as keyof typeof formData]}
                                onChange={(e) => handleChange(field.id, e.target.value)}
                                className="input-field text-center placeholder:text-xs focus-visible:border-accent focus-visible:ring-accent/30 bg-white"
                                placeholder={field.placeholder}
                            />
                        </Field>
                    ))}
                    
                    <Button type="submit" className="hover:cursor-pointer mt-4 bg-primary w-full inline-flex items-center justify-center gap-x-2">
                        <LogIn size={10} />
                        <span className="text-xs">Login</span>
                    </Button>
                    
                    <Link href="/register" className="text-xs text-center text-primary mt-2">
                        Belum punya akun? Daftar
                    </Link>
                </form>
            </div>
        </div>
    );
}