import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().email('Wprowadź poprawny adres e-mail').required('Pole e-mail jest wymagane'),
  password: yup.string().required('Pole hasło jest wymagane'),
})
