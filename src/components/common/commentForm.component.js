import { Formik, Form, Field } from "formik";
import Button from "./button.component";

const CommentForm = ({ commentSubmit }) => {
    return (
        <Formik initialValues={{comment: ''}} onSubmit={ async (value, { resetForm }) => {
            await commentSubmit(value);
            resetForm();
        }}>
            {formikProps => (
                <Form className="d-flex mt-3" onSubmit={formikProps.handleSubmit}>
                    <Field className="form-control" as="textarea" name="comment" placehonder="Comment" />
                    <Button type="submit" className="removeBtn">
                        <i className="fas fa-paper-plane" />
                    </Button>
                </Form>
            )}
        </Formik>
    );
}
 
export default CommentForm;