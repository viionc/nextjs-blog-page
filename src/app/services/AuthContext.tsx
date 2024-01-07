"use client";
import React, {ReactNode, createContext, useContext, useState} from "react";

type AuthContextProps = {
    user: string;
};

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("Couldn't initialize Auth Context.");
    return context;
};

function AuthContextProvider({children}: {children: ReactNode}) {
    const [user, setUser] = useState("test-user");
    return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
