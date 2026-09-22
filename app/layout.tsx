
import type {Metadata} from "next";
import {Geist, Inter, Sora} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import Header from "@/components/Header";
import Container from "@/components/ui/Container";

const geist = Geist({subsets: ['latin'], variable: '--font-sans'});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
});

export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} | ${process.env.NEXT_PUBLIC_APP_MOTTO}`,
    description: "Kelola banyak peserta sesi badminton dengan lebih mudah! AduRaket membantu host menyusun matchup yang seimbang, cepat, dan praktis untuk setiap sesi permainan.\n",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en"
            className={cn("h-full", "antialiased", "court-bg", inter.variable, sora.variable, "font-sans", geist.variable)}>
            <body className="relative court-bg min-h-screen flex flex-col">
                <Header/>
                <main className="flex flex-1 py-5">
                    <Container className="flex flex-1 flex-col">
                        {children}
                    </Container>
                </main>
                
                <footer className="mx-auto mb-1 text-xs text-primary text-[8px]">
                    Created By:{" "}
                    <a href="https://puntodamar.vercel.app/" target="_blank" className="text-coral font-bold">Punto Damar P.</a>
                </footer>
            </body>
        
        </html>
    );
}
