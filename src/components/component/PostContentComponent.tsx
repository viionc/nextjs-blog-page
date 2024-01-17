"use client";
import React from "react";
import useFetchUniquePosts from "@/hooks/useFetchUniquePost";
import {usePathname} from "next/navigation";
import Spinner from "./Spinner";
import PostContent from "@/app/posts/[id]/PostContent";
import {SessionUser} from "@/types/next-auth";

type PostContentComponentProps = {
    user: SessionUser | undefined;
};

function PostContentComponent({user}: PostContentComponentProps) {
    const path = usePathname();
    const postId = path.split("/").slice(-1)[0];
    const {post, status} = useFetchUniquePosts(postId);

    return (
        <main className="flex justify-center w-full py-6">
            {status === "loading" && <Spinner />}
            {status === "done" && post && <PostContent user={user} post={post} />}
            {status === "error" && <p>Couldnt load data</p>}
        </main>
    );
}

export default PostContentComponent;
