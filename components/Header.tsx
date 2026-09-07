'use client';

import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";


export default function Header() {
    const pathname = usePathname();
    
    return (
        <>
            {pathname !== '/' && (
                <Link href="/" className="absolute left-0 right-0 top-4 flex justify-center">
                    <img alt="Home" src="/logo.png" className="size-7 w-auto" />
                </Link>
            )}
        </>
    );
}