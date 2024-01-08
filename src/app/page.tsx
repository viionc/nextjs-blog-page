import {auth} from "@/auth";
import BlogPage from "./ui/BlogPage";
import AddNewPostButton from "./ui/header/AddNewPostButton";

export default async function Home() {
    const session = await auth();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between ">
            {session?.user ? <AddNewPostButton user={session.user} /> : null}
            <BlogPage />
        </main>
    );
}
