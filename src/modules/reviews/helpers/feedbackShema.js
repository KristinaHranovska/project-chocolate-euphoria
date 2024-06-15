import * as Yup from "yup";
import { commentTextarea, formatRegex, isValidLatinInput, valueNumber } from "helpers/regex";


export const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .matches(isValidLatinInput, "A comment can only contain Latin characters")
        .required("Required"),
    email: Yup.string()
        .matches(
            formatRegex,
            "Invalid email format"
        )
        .required("Required"),
    phone: Yup.string()
        .matches(
            valueNumber,
            "Invalid phone number format (xx-xxx-xxxx)"
        ),
    comment: Yup.string()
        .min(10, "Too Short!")
        .max(150, "Too Long!")
        .matches(
            commentTextarea,
            'A comment can only contain Latin characters, numbers, and symbols .,!?/-"():;'
        )
        .required("Required"),
});