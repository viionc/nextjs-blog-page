import PostContentComponent from "@/components/component/PostContentComponent";
import {auth} from "@/auth";

async function Page() {
    const session = await auth();
    return <PostContentComponent user={session?.user} />;
}

export default Page;
