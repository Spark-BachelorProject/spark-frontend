import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  email: yup.string().email('Wprowadź poprawny adres e-mail').required('Pole e-mail jest wymagane'),
  firstName: yup.string().required('Pole imię jest wymagane'),
  lastName: yup.string().required('Pole nazwisko jest wymagane'),
  password: yup.string().required('Pole hasło jest wymagane'),
  repeatedPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Hasła muszą się zgadzać')
    .required('Pole powtórz hasło jest wymagane'),
})
