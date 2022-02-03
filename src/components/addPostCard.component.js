import { useAuth } from "../contexts/authContext";
import Button from "./common/button.component";

const AddPostCard = ({ onTogglePost }) => {
    const { currentUser } = useAuth();
    return (
        <div className="card">
            <div>
                <div className="card-body addPost">
                    <span className="user">
                        <i className="far fa-user" />
                        <b>{currentUser?.name}</b>
                    </span>
                    <Button type="button" onClick={() => onTogglePost((prev) => !prev)}>What's on your mind?</Button>
                </div>
            </div>
        </div>
    );
}
 
export default AddPostCard;