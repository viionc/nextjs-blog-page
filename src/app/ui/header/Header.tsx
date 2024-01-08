import React from "react";
import Link from "next/link";
import HeaderButtons from "./HeaderButtons";

function Header() {
    return (
        <header className="w-full h-16 border-b border-gray-500 flex justify-center ">
            <div className="container px-2 flex items-center h-full font-semibold gap-8">
                <Link href="/">
                    <h2>logo</h2>
                </Link>
                <HeaderButtons />
            </div>
        </header>
    );
}

export default Header;
