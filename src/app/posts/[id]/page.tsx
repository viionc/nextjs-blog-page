"use client";
import Spinner from "@/components/component/Spinner";
import {Post, Status, getPost} from "@/lib/apiUtil";
import {usePathname} from "next/navigation";
import React, {useEffect, useState} from "react";
import PostContent from "./PostContent";

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
        <main className="flex justify-center w-full py-6">
            {status === "loading" && <Spinner />}
            {status === "done" && post && <PostContent post={post} />}
            {status === "error" && <p>Couldnt load data</p>}
        </main>
    );
}

export default Page;
