export type Status = "loading" | "done" | "error";
export const BASE_URL =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ? "http://localhost:3000/" : "https://nextjs-blog-page-sepia.vercel.app/";

type APIProps = {
    BASE_URL: string;
    getAllPosts: () => Promise<Post[]>;
    getUniquePost: (postId: string) => Promise<Post>;
    addPost: (post: PostRequest) => Promise<Post>;
    deletePost: (postId: string) => Promise<boolean>;
};

export interface PostRequest {
    title: string;
    category: string;
    text: string;
    userId: string;
    userName: string;
}
export interface Post extends PostRequest {
    postId: string;
    createdAt: string;
    user: any;
}

const API: APIProps = {
    BASE_URL: process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ? "http://localhost:3000/" : "https://nextjs-blog-page-sepia.vercel.app/",
    getAllPosts: async (): Promise<Post[]> => {
        try {
            const response = await fetch(`${BASE_URL}api/get`, {cache: "no-store"});
            const data = await response.json();
            const posts = data.data;
            return posts;
        } catch (error) {
            throw new Error("");
        }
    },
    getUniquePost: async (id: string): Promise<Post> => {
        try {
            const response = await fetch(`${BASE_URL}api/get/${id}`, {cache: "no-store"});
            const data = await response.json();
            const post = data.data;
            return post;
        } catch (error) {
            throw new Error("");
        }
    },
    addPost: async (post: PostRequest): Promise<Post> => {
        try {
            const response = await fetch(`${BASE_URL}api/post`, {cache: "no-store", method: "POST", body: JSON.stringify(post)});
            const newPost = await response.json();
            return newPost.result;
        } catch (error) {
            throw new Error("Couldn't add post to database.");
        }
    },
    deletePost: async (postId: string): Promise<boolean> => {
        try {
            await fetch(`${BASE_URL}api/delete`, {cache: "no-store", method: "DELETE", body: JSON.stringify({postId})});
            return true;
        } catch (error) {
            throw new Error("Couldn't delete post in database.");
        }
    },
};

export default API;
