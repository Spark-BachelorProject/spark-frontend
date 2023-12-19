import * as yup from 'yup'

export const createGroupSchema = yup.object().shape({
  name: yup.string().trim().required('Nazwa grupy jest wymagana'),
  description: yup.string().trim().required('Opis jest wymagany'),
  city: yup.string().trim().required('Miasto jest wymagane'),
  activity: yup.string().trim(),
  privacy: yup.string().trim(),
})
