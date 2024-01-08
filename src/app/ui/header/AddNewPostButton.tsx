"use client";
import {User} from "next-auth";
import {useRouter} from "next/navigation";
import React from "react";

function AddNewPostButton({user}: {user: User | undefined}) {
    const router = useRouter();
    return (
        <button
            className={`bg-white rounded-md text-black hover:bg-gray-300 transition-colors p-1 font-semibold h-8 w-32 fixed top-[95px] left-1/4`}
            onClick={() => router.push("/add-new-post")}>
            Add new post
        </button>
    );
}

export default AddNewPostButton;
