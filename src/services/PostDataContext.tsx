"use client";
import {PostCategory} from "@/components/component/NewPostForm";
import {Post} from "@prisma/client";
import {ReactNode, createContext, useContext, useEffect, useState} from "react";

type PostDataContextProviderProps = {
    children: ReactNode;
};

type PostDataContextProps = {
    filteredPosts: Post[];
    category: PostCategory | null;
    removePostLocally: (postId: string) => void;
    updatePosts: (posts: Post[]) => void;
    getPostById: (postId: string) => Post | undefined;
    changeCategory: (category: PostCategory) => void;
};

const PostDataContext = createContext<PostDataContextProps | null>(null);

export const usePostDataContext = () => {
    const context = useContext(PostDataContext);
    if (!context) {
        throw new Error("Couldn't initialize context.");
    }
    return context;
};

function PostDataContextProvider({children}: PostDataContextProviderProps) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [category, setCategory] = useState<PostCategory | null>(null);

    const removePostLocally = (postId: string) => {
        setPosts((prev) => prev.filter((post) => post.postId !== postId));
    };

    const getPostById = (postId: string) => {
        return posts.find((post) => post.postId === postId);
    };

    const filterPosts = (category: PostCategory | null) => {
        if (!category) {
            setFilteredPosts(posts);
            return;
        }

        const filtered = posts.filter((post) => post.category === category);
        setFilteredPosts(filtered);
    };

    const changeCategory = (newCategory: PostCategory) => {
        newCategory === category ? setCategory(null) : setCategory(newCategory);
    };

    const updatePosts = (posts: Post[]) => {
        setPosts(posts);
    };

    useEffect(() => {
        setFilteredPosts(posts);
    }, [posts]);

    useEffect(() => {
        filterPosts(category);
    }, [category]);

    return (
        <PostDataContext.Provider value={{category, filteredPosts, removePostLocally, updatePosts, getPostById, changeCategory}}>
            {children}
        </PostDataContext.Provider>
    );
}

export default PostDataContextProvider;
