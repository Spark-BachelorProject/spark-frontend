import dayjs from 'dayjs'

export const timeNow = dayjs().format('HH:mm')
export const dateNowYYYYMMDD = dayjs().format('YYYY-MM-DD')
export const dateNowDDMMYYYY = dayjs().format('DD-MM-YYYY')

export const formatTimeAgo = (timestamp) => {
  // Convert timestamp to a JavaScript Date object
  const dataTime = new Date(timestamp)
  const now = new Date()

  // Calculate the difference in milliseconds
  const timeDifference = now - dataTime

  // Calculate how many days, hours and minutes ago the event was
  const minutes = Math.floor(timeDifference / (1000 * 60))
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
    const date = dataTime.toLocaleDateString()
    const time = dataTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    return `${date}, ${time}`
  }
}

export const isToday = (timestamp) => {
  const date = new Date(timestamp)
  const today = new Date()

  // console.log(date.getDate(), today.getDate(), 'ciyucie')
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

export const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  const hours = date.getHours()
  const minutes = date.getMinutes()

  // Pad the minutes with a 0 if it's less than 10
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return `${hours}:${formattedMinutes}`
}

export const formatDate = (dateString) => {
  if (isToday(dateString)) {
    return 'Dzisiaj'
  }

  const date = new Date(dateString)
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)
  const dayAfterTomorrow = new Date(today)
  dayAfterTomorrow.setDate(today.getDate() + 2)

  if (date.toDateString() === tomorrow.toDateString()) {
    return 'Jutro'
  } else if (date.toDateString() === dayAfterTomorrow.toDateString()) {
    return 'Pojutrze'
  } else {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = date.toLocaleDateString('pl-PL', options)
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
  }
}

export const formatTimeAndDateToUnix = (date, time) => {
  const dateAndTime = `${date} ${time}`
  const unix = dayjs(dateAndTime).unix()
  return unix * 1000
}
