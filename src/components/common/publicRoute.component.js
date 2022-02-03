import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../../contexts/authContext";

const PublicRoute = ({ children }) => {
    const { currentUser } = useAuth();
    return !currentUser ? children : <Redirect to="/login" />;
}
 
export default PublicRoute;