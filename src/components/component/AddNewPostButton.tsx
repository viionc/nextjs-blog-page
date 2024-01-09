"use client";
import {useRouter} from "next/navigation";
import React from "react";
import {Button} from "../ui/button";

function AddNewPostButton() {
    const router = useRouter();
    return (
        <Button
            className={`bg-white rounded-md text-black hover:bg-gray-300 transition-colors p-1 font-semibold h-8 w-32 fixed top-[95px] left-1/4`}
            onClick={() => router.push("/add-new-post")}>
            Add new post
        </Button>
    );
}

export default AddNewPostButton;
