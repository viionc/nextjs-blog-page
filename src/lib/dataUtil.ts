import {Post} from "@/app/services/BlogContext";

export type Status = "loading" | "done" | "error";

export const formatPost = (data: any): Post => {
    return {
        postId: data.postid,
        userId: data.userid,
        createdAt: data.createdat,
        category: data.category,
        text: data.text,
        title: data.title,
    };
};

export const getAllPosts = async (): Promise<Post[]> => {
    try {
        const response = await fetch("http://localhost:3000/api/get", {cache: "no-store"});
        const data = await response.json();
        const posts = data.rows.map((row: any) => formatPost(row));
        return posts;
    } catch (error) {
        throw new Error("");
    }
};

export const getPost = async (id: string): Promise<Post> => {
    try {
        const response = await fetch(`http://localhost:3000/api/get/${id}`, {cache: "no-store"});
        const data = await response.json();
        const post = formatPost(data.row);
        return post;
    } catch (error) {
        throw new Error("");
    }
};

export const addPost = async (post: Post): Promise<boolean> => {
    try {
        await fetch("http://localhost:3000/api/post", {cache: "no-store", method: "POST", body: JSON.stringify(post)});
        return true;
    } catch (error) {
        return false;
    }
};
