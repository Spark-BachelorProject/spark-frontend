import dayjs from 'dayjs'

export const timeNow = dayjs().format('HH:mm')
export const dateNowYYYYMMDD = dayjs().format('YYYY-MM-DD')
export const dateNowDDMMYYYY = dayjs().format('DD-MM-YYYY')
