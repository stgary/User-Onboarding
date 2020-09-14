import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required()
        .min(3, 'name must be longer than three characters'),
    email: yup.string()
        .trim()
        .email()
        .required(),
    password: yup.string().required(),
    terms: yup.bool().oneOf([true], 'You must accept the terms'),
})

export default formSchema