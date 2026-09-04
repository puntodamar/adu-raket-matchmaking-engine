import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./css/app.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title:  `${process.env.NEXT_PUBLIC_APP_NAME} | ${process.env.NEXT_PUBLIC_APP_MOTTO}`,
  description: "Kelola banyak peserta sesi badminton dengan lebih mudah! AduRaket membantu host menyusun matchup yang seimbang, cepat, dan praktis untuk setiap sesi permainan.\n",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased court-bg`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <div className={"flex-1"}></div>
      <footer className={"mx-auto text-xs text-primary mb-1"}>Created By: <a href={"https://puntodamar.vercel.app/"} target={"_blank"} className={"text-coral"}>Punto Damar P.</a></footer>
      </body>

    </html>
  );
}
