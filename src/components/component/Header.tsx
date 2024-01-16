import React from "react";
import Link from "next/link";
import {auth} from "@/auth";
import NavbarProfile from "./NavbarProfile";

async function Header() {
    const session = await auth();
    return (
        <header className="w-full h-16 border-b border-gray-500 flex justify-center bg-zinc-950  ">
            <div className="container px-2 flex items-center h-full font-semibold gap-8">
                <Link href="/">
                    <h2 className="hover:text-yellow-500">Blog Page</h2>
                </Link>
                <NavbarProfile user={session?.user} />
            </div>
        </header>
    );
}

export default Header;
