import {  createContext, ReactNode, useEffect, useState } from 'react';
import axios from "axios";

interface UserContextType {
    user: {id: string, name: string, email: string, role: string } | null;
    setUser: (user :{id: string, name: string, email: string, role: string } | null) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserContextType['user']>(null);
    useEffect(() => {
        if (!user) {
            axios.get('/profile').then(({ data }) => setUser(data));
        }
    }, []);
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}