import { commentTextarea } from 'helpers/regex';
import * as Yup from 'yup';

export const promocodeSchema = Yup.object().shape({
    promocode: Yup.string()
        .matches(commentTextarea, "Invalid promocode format")
});