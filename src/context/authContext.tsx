"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

type AuthContextType = {
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    user: any;
    isLogging: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLogging, setIsLogging] = useState(false);
    const [user, setUser] = useState<Record<string, any> | null>(null);

    // check auth and get user
    useEffect(() => {
        (async () => {
            try {
                await axios.get("/api/user/current-user")
                    .then((res) => {
                        const data = res.data.data;
                        setIsAuthenticated(true);
                        setUser(data);
                    })
            } catch (error) {
                setIsAuthenticated(false);
                router.push("/admin/auth/login");
            }
        })();
    }, []);

    // login
    const login = async (email: string, password: string) => {
        if (!email || !password) return;
        try {
            setIsLogging(true)
            await axios.post("/api/user/login", { email, password })
                .then(() => {
                    window.location.href = `${window.location.origin}/admin/access-control`;
                })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message)
            } else {
                toast.error("Something went wrong")
            }
            setIsLogging(false)
        }
    }

    // logout
    const logout = async () => {
        try {
            setIsLogging(true);
            await axios.get("/api/user/logout")
                .then(() => {
                    window.location.href = `${window.location.origin}/admin/auth/login`;
                })
        } catch (error) {
            toast.error("Failed to login");
            setIsLogging(false);
        }
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isLogging }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const { isAuthenticated, user, login, logout, isLogging } = useContext(AuthContext)!;

    return { isAuthenticated, user, login, logout, isLogging };
}

export default AuthContext;