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

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)
  const dayAfterTomorrow = new Date(today)
  dayAfterTomorrow.setDate(today.getDate() + 2)

  if (date.toDateString() === today.toDateString()) {
    return 'Dzisiaj'
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return 'Jutro'
  } else if (date.toDateString() === dayAfterTomorrow.toDateString()) {
    return 'Pojutrze'
  } else {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = date.toLocaleDateString('pl-PL', options)
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
  }
}
