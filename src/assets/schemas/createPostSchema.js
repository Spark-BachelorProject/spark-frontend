import * as yup from 'yup'

export const createPostSchema = yup.object().shape({
  description: yup.string().trim().required('Opis jest wymagany'),
  privacy: yup.string().trim(),
  groups: yup.string().trim(),
  activity: yup.string().trim(),
  dateStart: yup.string().trim().required('Data rozpoczęcia jest wymagana'),
  hourStart: yup.string().trim().required('Godzina rozpoczęcia jest wymagana'),
  address: yup.string().trim().required('Adres jest wymagany'),
  tags: yup.array().test({
    name: 'minimumTags',
    message: 'Podaj co najmniej dwa tagi',
    test: (tags) => tags && tags.length >= 2,
  }),
})
