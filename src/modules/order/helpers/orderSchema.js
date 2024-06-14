import { formatRegex } from 'modules/footer/helper/constants';
import { valueNumber } from 'modules/reviews/helpers';
import * as Yup from 'yup';

export const contactFormValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    lastName: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
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
            /^[a-zA-Z0-9 .,-/"()!?]+$/,
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