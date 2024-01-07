"use client";
import React from "react";
import Button from "../components/Button";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useAuthContext} from "@/app/services/AuthContext";

function Header() {
    const path = usePathname();
    const {user} = useAuthContext();
    return (
        <header className="w-full h-16 border-b border-gray-500 flex justify-center ">
            <div className="container px-2 flex items-center h-full font-semibold gap-8">
                <Link href="/">
                    <h2>logo</h2>
                </Link>
                <div className="ms-auto flex gap-8">
                    {path !== "/pages/add-new-post" ? (
                        <Link href="/pages/add-new-post">
                            <Button text="Add new post" size="lg" />
                        </Link>
                    ) : null}
                </div>
                {user ? <p>{user}</p> : null}
            </div>
        </header>
    );
}

export default Header;
