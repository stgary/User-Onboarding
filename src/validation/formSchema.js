import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required()
        .min(3, 'name must be longer than three characters'),
    email: yup.string()
        .trim()
        .email('must be a valid email')
        .required('email is required'),
    terms: yup.string().required('You must accept the terms'),
})

export default formSchema