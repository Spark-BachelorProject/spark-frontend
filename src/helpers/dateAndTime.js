import dayjs from 'dayjs'

export const timeNow = dayjs().format('HH:mm')
export const dateNowYYYYMMDD = dayjs().format('YYYY-MM-DD')
export const dateNowDDMMYYYY = dayjs().format('DD-MM-YYYY')


export const formatTimeAgo = (data, time) => {
  // Convert date and time to a single JavaScript Date object
  const dataTime = new Date(`${data}T${time}`)
  const now = new Date()

  // Calculate the difference in milliseconds
  const timeDifferance = now - dataTime

  // Calculate how many days, hours and minutes ago the event was
  const minutes = Math.floor(timeDifferance / (1000 * 60))
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (minutes < 1) {
    return 'przed chwilą'
  } else if (minutes < 60) {
    return `${minutes} min temu`
  } else if (hours < 24) {
    return `${hours} godzin${hours === 1 ? 'ę' : hours < 5 ? 'y' : ''} temu`
  } else if (days < 7) {
    return `${days} dni${days === 1 ? 'a' : ''} temu`
  } else {
    return `${data} ${time}`
  }
}