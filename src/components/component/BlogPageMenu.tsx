"use client";
import React, {useState} from "react";
import {SessionUser} from "./PostCard";
import AddNewPostButton from "./AddNewPostButton";
import {PostCategory, categories} from "./NewPostForm";
import {usePostDataContext} from "@/services/PostDataContext";

export type BlogPageMenuProps = {
    user: SessionUser | undefined;
};

function BlogPageMenu({user}: BlogPageMenuProps) {
    const {category, changeCategory} = usePostDataContext();

    return (
        <aside className="fixed top-[95px] left-1/4">
            {user ? <AddNewPostButton /> : null}
            <ul className="mt-4 text-xl flex flex-col gap-2">
                {categories.map((cat) => (
                    <li key={cat} onClick={() => changeCategory(cat)}>
                        <button className={`bg-transparent border-none hover:text-yellow-500 ${cat === category ? "text-orange-500" : ""}`}>
                            {cat}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default BlogPageMenu;
