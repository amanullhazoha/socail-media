import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import Button from "./common/button.component";

const Navbar = () => {
    const { currentUser, userLogout } = useAuth();

    return (
        <header id="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to="/">
                        Navbar
                    </Link>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item d-flex">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>

                                <Link className="nav-link" to="/gallery">
                                    Gallery
                                </Link>

                                <Link className="nav-link" to="/albums">
                                    Albums
                                </Link>

                                <Link className="nav-link" to="/users">
                                    Users
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center">
                            <b>{currentUser?.name}</b>
                            <Button className="removeBtn" onClick={userLogout}>
                                <i className="fas fa-sign-out-alt" />
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
