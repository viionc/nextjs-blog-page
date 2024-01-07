"use client";
import React, {ReactNode, createContext, useContext, useState} from "react";
import {useRouter} from "next/navigation";
export type Post = {
    title: string;
    category: string;
    text: string;
    postId: string;
    userId: string;
    createdAt: number;
};
type BlogContextProps = {
    posts: Post[];
    addPost: (post: Post) => void;
};

const BlogContext = createContext<BlogContextProps | null>(null);

export const useBlogContext = () => {
    const context = useContext(BlogContext);
    if (!context) throw new Error("Couldn't initialize Auth Context.");
    return context;
};

function BlogContextProvider({children}: {children: ReactNode}) {
    const [posts, setPosts] = useState<Post[]>([]);
    const router = useRouter();
    const addPost = (post: Post) => {
        fetch("http://localhost:3000/api/post", {cache: "no-store", method: "POST", body: JSON.stringify(post)}).then(() =>
            router.push(`/pages/posts/${post.postId}`)
        );
    };

    return <BlogContext.Provider value={{posts, addPost}}>{children}</BlogContext.Provider>;
}

export default BlogContextProvider;
