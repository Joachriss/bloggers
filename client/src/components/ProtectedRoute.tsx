import { useContext} from "react"
import { UserContext } from "../../context/UserContext";
import { useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

export const ProtectedRoute = (props: any) => {
    const { children, requiredRole } = props;
    const navigate = useNavigate();
    const userContext = useContext(UserContext);

    if (userContext?.user?.role !== requiredRole) {
        if(userContext?.user?.role === 'user'){
            toast.error("Unauthorized access");
        }
        navigate("/error");
    }
    if (userContext?.user?.role === null) {
        navigate("/login");
    }
    return children;

}
