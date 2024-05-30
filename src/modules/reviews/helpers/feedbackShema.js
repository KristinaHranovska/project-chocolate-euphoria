import * as Yup from "yup";
import { formatRegex } from 'modules/footer/helper/constants';
import { valueNumber } from "./constants";


export const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
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
        .max(50, "Too Long!")
        .required("Required"),
});