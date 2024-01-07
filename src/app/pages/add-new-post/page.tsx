import {redirect} from "next/navigation";
import NewPostForm from "../../ui/newPostForm/NewPostForm";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between ">
            <section className="container flex justify-center flex-col items-center">
                <h1 className="text-start w-1/3 text-2xl my-8">Add new post:</h1>
                <NewPostForm />
            </section>
        </main>
    );
}
