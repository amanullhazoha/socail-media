import { Formik, Form, Field } from "formik";
import { useAuth } from "../../contexts/authContext";
import Button from "./button.component";

const AddPostForm = ({
    value,
    status,
    onTogglerPost,
    postEdit,
    addNewPost,
}) => {
    const { currentUser } = useAuth();

    const initialvalues = () => {
        if (status === "edit") {
            return {
                title: value.title,
                body: value.body,
            };
        } else {
            return {
                title: "",
                body: "",
            };
        }
    };

    return (
        <Formik
            enableReinitialize
            initialValues={initialvalues()}
            onSubmit={async (formValue, action) => {
                (await status) === "edit"
                    ? postEdit(formValue, value.id)
                    : addNewPost(formValue, currentUser.id);
                onTogglerPost();
                action.setSubmitting(false);
            }}
        >
            {(formikProps) => (
                <Form onSubmit={formikProps.handleSubmit}>
                    <Field
                        className="form-control"
                        as="textarea"
                        name="title"
                        placeholder="Title"
                    />
                    <Field
                        className="form-control mt-3"
                        as="textarea"
                        name="body"
                        placeholder="Post Body"
                    />

                    <Button
                        type="submit"
                        className="btn btn-primary mt-3"
                        style={{ width: "100%" }}
                    >
                        <b>{status === "edit" ? "Save" : "Post"}</b>
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default AddPostForm;
