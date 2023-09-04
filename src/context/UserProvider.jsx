import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(false);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider> 
    )
}
export default UserContextProvider;

export const useUserContext = () => useContext(UserContext);
