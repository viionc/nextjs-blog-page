import {auth} from "@/auth";
import AuthComponent from "./AuthButton";
import AddNewPostButton from "./AddNewPostButton";

async function HeaderButtons() {
    const session = await auth();

    return (
        <div className="ms-auto flex gap-8">
            {session?.user ? <AddNewPostButton user={session.user} /> : null}
            <AuthComponent user={session?.user} />
        </div>
    );
}

export default HeaderButtons;
