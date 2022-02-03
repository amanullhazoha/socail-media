import { object, number, string } from "yup";

const loginSchema = object().shape({
    userId: number()
        .required("Please Enter Your ID."),
    userName: string()
        .trim()
        .required("Please Enter Your User Name.")
})

export default loginSchema;