import Image from "next/image";
import Header from "./ui/header/Header";
import BlogPage from "./ui/components/BlogPage";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between ">
            <BlogPage />
        </main>
    );
}
