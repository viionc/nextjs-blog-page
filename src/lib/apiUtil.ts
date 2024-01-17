import {Post, Role, User} from "@prisma/client";

export type Status = "loading" | "done" | "error";
export const BASE_URL =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ? "http://localhost:3000/" : "https://nextjs-blog-page-sepia.vercel.app/";

type APIProps = {
    getAllPosts: () => Promise<Post[]>;
    getUniquePost: (postId: string) => Promise<Post>;
    addPost: (post: Partial<Post>) => Promise<Post>;
    deletePost: (postId: string) => Promise<boolean>;
    updateUserRole: (userId: string, newRole: Role) => Promise<User>;
    likePost: (userId: string, postId: string, isLiked: boolean) => Promise<Post>;
    unlikePost: (userId: string, likedPosts: Post[]) => Promise<Post>;
};

const API: APIProps = {
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
    addPost: async (post: Partial<Post>): Promise<Post> => {
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
    updateUserRole: async (userId: string, newRole: Role): Promise<User> => {
        try {
            const response = await fetch(`${BASE_URL}api/put/user`, {
                method: "PUT",
                body: JSON.stringify({userId, newRole}),
            });
            const user = response.json();
            return user;
        } catch (error) {
            throw new Error("Couldn't update user in database.");
        }
    },
    likePost: async (userId: string, postId: string, isLiked: boolean): Promise<Post> => {
        try {
            const response = await fetch(`${BASE_URL}api/put/post`, {
                method: "PUT",
                body: JSON.stringify({postId, userId, isLiked}),
            });
            const post = response.json();
            return post;
        } catch (error) {
            throw new Error("Couldn't update the post.");
        }
    },
    unlikePost: async (userId: string, likedPosts: Post[]): Promise<Post> => {
        try {
            const response = await fetch(`${BASE_URL}api/put/post`, {
                method: "PUT",
                body: JSON.stringify({userId, likedPosts}),
            });
            const post = response.json();
            return post;
        } catch (error) {
            throw new Error("Couldn't update the post.");
        }
    },
};

export default API;
