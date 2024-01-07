"use client";
import {Post} from "@/app/services/BlogContext";
import Spinner from "@/app/ui/components/Spinner";
import {Status, getPost} from "@/lib/dataUtil";
import {usePathname} from "next/navigation";
import React, {useEffect, useState} from "react";

function Page() {
    const [post, setPost] = useState<Post | null>(null);
    const [status, setStatus] = useState<Status>("loading");
    const path = usePathname();
    const postId = path.split("/").slice(-1)[0];
    useEffect(() => {
        setStatus("loading");
        getPost(postId)
            .then((data) => {
                setPost(data);
                setStatus("done");
            })
            .catch(() => setStatus("error"));
    }, [postId]);

    return (
        <main className="flex justify-center w-full">
            {status === "loading" && <Spinner />}
            {status === "done" && post && <div>{post.title}</div>}
            {status === "error" && <p>Couldnt load data</p>}
        </main>
    );
}

export default Page;
