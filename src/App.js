import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Login from "./components/login.component";
import Posts from "./components/posts.component";
import { AuthProvider } from "./contexts/authContext";
import PublicRoute from "./components/common/publicRoute.component";
import PrivateRoute from "./components/common/privateRoute.component";
import Layout from "./components/layout.component";

const App = () => {
    return (
        <AuthProvider>
            <Navbar />
            <Layout>
                <Switch>
                    <Route
                        exact
                        path="/login"
                        render={(props) => (
                            <PublicRoute>
                                <Login {...props} />
                            </PublicRoute>
                        )}
                    />
                    <Route
                        exact
                        path="/users"
                        render={(props) => (
                            <PrivateRoute>
                                <h1 {...props}>This is users.</h1>
                            </PrivateRoute>
                        )}
                    />
                    <Route
                        exact
                        path="/albums"
                        render={(props) => (
                            <PrivateRoute>
                                <h1 {...props}>This is albums.</h1>
                            </PrivateRoute>
                        )}
                    />
                    <Route
                        exact
                        path="/gallery"
                        render={(props) => (
                            <PrivateRoute>
                                <h1 {...props}>This is gallery.</h1>
                            </PrivateRoute>
                        )}
                    />
                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <PrivateRoute>
                                <Posts />
                            </PrivateRoute>
                        )}
                    />
                </Switch>
            </Layout>
        </AuthProvider>
    );
};

export default App;
