import {ResolvableTo} from "tailwindcss/types/config";

export type Status = "loading" | "done" | "error";
export const BASE_URL = "http://localhost:3000/";

// export const formatPost = (data: any): Post => {
//     return {
//         postId: data.postid,
//         userId: data.userid,
//         createdAt: data.createdat,
//         category: data.category,
//         text: data.text,
//         title: data.title,
//     };
// };

export const getAllPosts = async (): Promise<Post[]> => {
    try {
        const response = await fetch(`${BASE_URL}api/get`, {cache: "no-store"});
        const data = await response.json();
        const posts = data.data;
        return posts;
    } catch (error) {
        throw new Error("");
    }
};

export const getPost = async (id: string): Promise<Post> => {
    try {
        const response = await fetch(`${BASE_URL}api/get/${id}`, {cache: "no-store"});
        const data = await response.json();
        const post = data.data;
        return post;
    } catch (error) {
        throw new Error("");
    }
};

export interface PostRequest {
    title: string;
    category: string;
    text: string;
    userId: string;
}
export interface Post extends PostRequest {
    postId: string;
    createdAt: string;
    user: any;
}
export const addPost = async (post: PostRequest): Promise<Post> => {
    try {
        const response = await fetch(`${BASE_URL}api/post`, {cache: "no-store", method: "POST", body: JSON.stringify(post)});
        const newPost = await response.json();
        return newPost.result;
    } catch (error) {
        throw new Error("Couldn't add post to database.");
    }
};
