import {auth} from "@/auth";
import {NewPostForm} from "@/components/component/new-post-form";
import {redirect} from "next/navigation";

export default async function Page() {
    const session = await auth();
    if (!session?.user) redirect("/api/auth/signin?callbackUrl=/add-new-post");

    return (
        <main className="flex min-h-[80vh] items-center justify-center ">
            <section className="container flex justify-center items-center h-full">
                <NewPostForm user={session.user} />
            </section>
        </main>
    );
}
