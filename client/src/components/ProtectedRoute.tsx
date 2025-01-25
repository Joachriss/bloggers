import { useContext, useEffect} from "react"
import { UserContext } from "../../context/UserContext";
import { useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

export const ProtectedRoute = (props: any) => {
    const { children, requiredRole } = props;
    const navigate = useNavigate();
    const userContext = useContext(UserContext);
    useEffect(() => {
        if (userContext?.user?.role !== requiredRole) {
            if(userContext?.user?.role === 'user'){
                toast.error("Unauthorized access");
            }
            navigate("/error");
        }
        if (userContext?.user === null) {
            navigate("/login",{replace: true});
        }
        
    }, [userContext?.user, requiredRole, navigate]);
    return children;

}
