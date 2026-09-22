'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import {LogIn, LogOut} from "lucide-react";
import logoAsset from '@/public/logo.png';
import {useUserStore} from "@/src/store/useUserStore";
import { Button } from "@base-ui/react";

export default function Header() {
    const pathname = usePathname();
    
    const loginVisible = pathname !== '/login' && pathname !== '/register';
    const user = useUserStore(state => state.user);
    
    return (
        <header className="relative z-50">
            <nav className="absolute left-0 right-0 top-2 flex justify-between items-center px-4 py-2 max-w-7xl mx-auto">
                <Link href="/" className="hover:cursor-pointer">
                    <Image
                        src={logoAsset}
                        alt="Home"
                        className={`${pathname !== '/' ? 'block' : 'hidden'} h-7 w-auto object-contain`}
                    />
                </Link>
                
                {!user && loginVisible && (
                    <Link
                        href="/login"
                        className={`${pathname === '/login' || pathname === '/register' ? 'hidden' : 'inline-flex'} items-center gap-x-2 hover:cursor-pointer text-xs`}>
                        <LogIn size={10} />
                        <span>Masuk / Daftar</span>
                    </Link>
                )}
                
                {user && (
                    <Button
                        className={`inline-flex items-center gap-x-2 hover:cursor-pointer text-xs`}>
                        <LogOut size={10} />
                        <span>Logout</span>
                    </Button>
                )}
            </nav>
        </header>
    );
}