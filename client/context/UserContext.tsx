import {  createContext, ReactNode, useEffect, useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';

interface UserContextType {
    user: {id: string, name: string, email: string, role: string } | null;
    setUser: (user: UserContextType['user']) => void;
    reloadUser: () => Promise<void>;
    logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserContextType['user']>(null);
    
    // get logged user
    const getUser = async ()=>{
        try {
            if (!user) {
                await axios.get('/profile').then(({ data }) => setUser(data));
            }
        }
        catch (error) {
            // toast.error('Get User: Something went wrong please check connection or try again');
        }
        
    }

    // Logout user
    const logout = async ()=>{
        try {
            const response = await axios.post('/logout');
            setUser(null);
            toast.success(response.data.message);
        } catch (error) {
            toast.error('Logout: Something went wrong please check connection or try again');
        }
    }

    useEffect(() => {
        getUser();
    }, []);
    return (
        <UserContext.Provider value={{user,setUser,reloadUser:getUser,logout}}>
            {children}
        </UserContext.Provider>
    )
}