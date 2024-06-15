import { commentTextarea, formatRegex, isValidLatinInput, valueNumber } from 'helpers/regex';

import * as Yup from 'yup';

export const contactFormValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .matches(isValidLatinInput, "A comment can only contain Latin characters")
        .required("Required"),
    lastName: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .matches(isValidLatinInput, "A comment can only contain Latin characters")
        .required("Required"),
    phone: Yup.string()
        .matches(
            valueNumber,
            "Invalid phone number format (xx-xxx-xxxx)"
        ),
    email: Yup.string()
        .matches(
            formatRegex,
            "Invalid email format"
        )
        .required("Required"),
    comment: Yup.string()
        .max(300, 'The maximum text length is 300 characters')
        .matches(
            commentTextarea,
            'A comment can only contain Latin characters, numbers, and symbols .,!?/-"():;'
        ),
});

export const orderFormInitialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    comment: '',
};