import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "@/app/providers/auth";
import React from "react";

export const WithProviders = ({children}: { children: React.ReactNode }) => {
    return (
        <BrowserRouter>
            <AuthProvider>
                {children}
            </AuthProvider>
        </BrowserRouter>

    );
};
