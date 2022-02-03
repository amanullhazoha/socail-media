import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Button from "./common/button.component";
import loginSchema from "../schema/login.schema";
import { useAuth } from "../contexts/authContext";

const Login = ({ history }) => {
    const { userLogin } = useAuth();
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-4 login">
                <Formik
                    initialValues={{userId: "", userName: ""}} 
                    validationSchema={loginSchema}
                    onSubmit={async (value, action) => {
                        try{
                            await userLogin(value.userId, value.userName);
                            history.push("/")
                            action.setSubmitting(false);
                        } catch(error) {
                            console.log(error);
                        }
                    }
                }>
                    {formikProps => (
                        <Form onSubmit={formikProps.handleSubmit}>
                            <Field className="form-control" name="userId" placeholder="User ID" />
                            <div className="error"><ErrorMessage name="userId" /></div>

                            <Field className="form-control" name="userName" placeholder="User Name" />
                            <div className="error"><ErrorMessage name="userName" /></div>

                            <Button className="btn btn-primary" type="submit">Log In</Button>
                        </Form>
                    )}
                </Formik>

                <hr />
                <Link to="/singup">
                    <div className="btn btn-success">Create New Account</div>
                </Link>
            </div>
        </div>
    );
}
 
export default Login;