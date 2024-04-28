import { createContext, useState } from "react"

export const AuthContext = createContext();
export const AuthProvidor = ({children}) => {
    const [user,setUser] = useState({name : "abdalla"});
    const [role,setRole] = useState(1);
    return <AuthContext.Provider value={{user,role}}>
        {children}
    </AuthContext.Provider>    
}