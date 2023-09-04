import { Outlet } from "react-router-dom";
import UserContextProvider from "../context/UserProvider";

const PublicLayout = () => {
    return (
        <UserContextProvider>
            <Outlet />
        </UserContextProvider>
    )
}
export default PublicLayout;