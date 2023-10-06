import React from "react";
import {AuthContext} from "@/app/providers/auth/context";

export const useAuth = () => {
    return React.useContext(AuthContext)
}