import React from "react";
import {AuthContext} from './context'
import {AuthContextType} from "./model";

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [user, setUser] = React.useState<any>(null);

    const signin = (newUser: string, callback: VoidFunction) => {

    };

    const signout = (callback: VoidFunction) => {

    };

    const value = {user, signin, signout};


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>


}
