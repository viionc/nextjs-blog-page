"use client";
import {User} from "next-auth";
import {useRouter} from "next/navigation";
import React from "react";

function AuthComponent({user}: {user: User | undefined}) {
    const router = useRouter();
    const handleAuthButton = () => {
        !user ? router.push("/api/auth/signin") : router.push("/api/auth/signout");
    };
    return (
        <>
            <span className="flex items-center justify-center">{user ? user.name : ""}</span>
            <button
                className={`bg-white rounded-md text-black hover:bg-gray-300 transition-colors p-1 font-semibold h-8 w-16`}
                onClick={handleAuthButton}>
                {user ? "Logout" : "Login"}
            </button>
        </>
    );
}

export default AuthComponent;
