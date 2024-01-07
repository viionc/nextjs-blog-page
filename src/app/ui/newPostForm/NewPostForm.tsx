"use client";

import {FormEvent, useState} from "react";
import Button from "../components/Button";

function NewPostForm() {
    const categories = ["Food", "Technology", "Movies & TV shows", "Music"] as const;
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Food");
    const [text, setText] = useState("");

    const submit = (e: FormEvent) => {
        e.preventDefault();
        console.log(title, category, text);
    };

    return (
        <form onSubmit={submit} className="w-1/2 flex flex-col gap-4">
            <div className="flex h-10 w-1/2">
                <label
                    htmlFor="title"
                    className="bg-sky-200 px-4 text-black border border-sky-300 rounded-s-md border-e-0 flex justify-center items-center">
                    Title
                </label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="border rounded-e-md w-full bg-sky-50 border-sky-300 border-s-0 flex items-center justify-center text-black p-1"
                />
            </div>
            <div className="flex h-10 w-1/2">
                <label
                    htmlFor="category"
                    className="bg-sky-200 px-4 text-black border border-sky-300 rounded-s-md border-e-0 flex justify-center items-center">
                    Category
                </label>
                <select
                    name=""
                    id="category"
                    className="border rounded-e-md w-full bg-sky-50 border-sky-300 border-s-0 flex items-center justify-center text-black p-1"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((category) => (
                        <option key={category}>{category}</option>
                    ))}
                </select>
            </div>
            <textarea
                rows={20}
                value={text}
                required
                onChange={(e) => setText(e.target.value)}
                className="border rounded-md w-full bg-sky-50 border-sky-300 border-s-0 flex items-center justify-center text-black p-1"></textarea>
            <button type="submit" className="bg-white rounded-md text-black hover:bg-gray-300 transition-colors p-1 font-semibold">
                Add
            </button>
        </form>
    );
}

export default NewPostForm;
