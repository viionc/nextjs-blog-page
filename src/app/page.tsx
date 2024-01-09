import {auth} from "@/auth";
import BlogContent from "../components/component/BlogContent";
import AddNewPostButton from "../components/component/AddNewPostButton";
// import AddAdminRoleButton from "@/components/component/AddAdminRoleButton";

export default async function Home() {
    const session = await auth();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between ">
            {session?.user ? <AddNewPostButton /> : null}
            {/* {session?.user ? <AddAdminRoleButton userId={session.user.id} /> : null} */}
            <BlogContent user={session?.user} />
        </main>
    );
}
