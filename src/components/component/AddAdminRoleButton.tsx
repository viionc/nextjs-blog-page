"use client";
import React from "react";
import {Button} from "../ui/button";
import API from "@/lib/apiUtil";

function AddAdminRoleButton({userId}: {userId: string}) {
    return (
        <Button
            className={`bg-white rounded-md text-black hover:bg-gray-300 transition-colors p-1 font-semibold h-8 w-32 fixed top-[125px] left-1/4`}
            onClick={() => API.updateUserRole(userId, "ADMIN")}>
            Give admin role
        </Button>
    );
}

export default AddAdminRoleButton;
