import type {Metadata} from "next";
import "./globals.css";
import {openSans} from "./ui/fonts";
import Header from "./ui/header/Header";
import AuthContextProvider from "./services/AuthContext";
import BlogContextProvider from "./services/BlogContext";

export const metadata: Metadata = {
    title: "Nextjs Blog Page",
    description: "A practice project for learning purposes.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <AuthContextProvider>
                <BlogContextProvider>
                    <body className={`${openSans.className} antialiased bg-zinc-900`} suppressHydrationWarning={true}>
                        <Header />
                        {children}
                    </body>
                </BlogContextProvider>
            </AuthContextProvider>
        </html>
    );
}
