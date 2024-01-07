"use client";
import React, {useEffect, useState} from "react";
import PostCard from "./components/PostCard";
import Spinner from "./components/Spinner";
import {Post, Status, getAllPosts} from "@/lib/apiUtil";

function BlogPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [status, setStatus] = useState<Status>("done");

    useEffect(() => {
        const fetchdata = async () => {
            setStatus("loading");
            getAllPosts()
                .then((data) => {
                    setPosts(data);
                    setStatus("done");
                })
                .catch(() => setStatus("error"));
        };
        fetchdata();
    }, []);

    return (
        <section className="container flex justify-center">
            <ul className="flex flex-col gap-2 w-1/3 mt-8 items-center">
                {status === "loading" && <Spinner />}
                {status === "done" && posts.length > 0 && posts.map((post: Post) => <PostCard key={post.postId} post={post} />)}
                {status === "error" && <p>Couldnt load data</p>}
            </ul>
        </section>
    );
}

export default BlogPage;
