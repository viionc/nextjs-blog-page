import {auth} from "@/auth";
import AuthButton from "./AuthButton";

async function HeaderButtons() {
    const session = await auth();

    return (
        <div className="ms-auto flex gap-8">
            {session?.user ? (
                <button className={`bg-white rounded-md text-black hover:bg-gray-300 transition-colors p-1 font-semibold h-8 w-32`}>
                    Add new post
                </button>
            ) : null}
            <AuthButton user={session?.user} />
        </div>
    );
}

export default HeaderButtons;
