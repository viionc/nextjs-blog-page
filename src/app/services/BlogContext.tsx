"use client";
import React, {ReactNode, createContext, useContext, useState} from "react";

export type Post = {
    title: string;
    user: string;
    category: string;
    text: string;
    postId: string;
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

    const addPost = (post: Post) => {
        setPosts((prev) => [...prev, post]);
    };

    return <BlogContext.Provider value={{posts, addPost}}>{children}</BlogContext.Provider>;
}

export default BlogContextProvider;
