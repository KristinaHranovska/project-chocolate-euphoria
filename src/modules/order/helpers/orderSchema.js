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
    //   deliveryType: Yup.string().required(),
    //   location: Yup.object().required(),
    //   address: Yup.string().max(300).required(),
    //   comment: Yup.string()
    //     .max(300, 'Максимальна довжина тексту - 300 символів')
    //     .matches(
    //       /^[а-яА-ЯґҐєЄіІїЇ0-9 .,-/"()!?]+$/,
    //       'Коментар може містити лише символи кирилиці, цифри та знаки .,!?/-"():;'
    //     ),
});

export const orderFormInitialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    // deliveryType: '',
    // location: '',
    // address: '',
    // comment: '',
};