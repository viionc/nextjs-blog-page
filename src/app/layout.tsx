import type {Metadata} from "next";
import "./globals.css";
import {openSans} from "../components/ui/fonts";
import Header from "../components/component/Header";
import {Toaster} from "@/components/ui/toaster";
import PostDataContextProvider from "@/services/PostDataContext";

export const metadata: Metadata = {
    title: "Nextjs Blog Page",
    description: "A practice project for learning purposes.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <PostDataContextProvider>
                <body className={`${openSans.className} antialiased bg-zinc-900`} suppressHydrationWarning={true}>
                    <Header />
                    {children}
                    <Toaster />
                </body>
            </PostDataContextProvider>
        </html>
    );
}
