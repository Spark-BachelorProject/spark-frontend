import dayjs from 'dayjs'

export const timeNow = dayjs().format('HH:mm')
export const dateNowYYYYMMDD = dayjs().format('YYYY-MM-DD')

export const formatTimeAgo = (dateString) => {
  // Convert dateString to a JavaScript Date object
  const dataTime = new Date(dateString)
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
  } else if (days === 1) {
    return 'wczoraj'
  } else if (days < 7) {
    return `${days} dni temu`
  } else {
    const date = dataTime.toLocaleDateString()
    const time = dataTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    return `${date}, ${time}`
  }
}

export const isToday = (dateString) => {
  const date = new Date(dateString)
  const today = new Date()

  // console.log(date.getDate(), today.getDate(), 'ciyucie')
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

export const formatTimeHHMM = (dateString) => {
  const date = new Date(dateString)
  const hours = date.getHours()
  const minutes = date.getMinutes()

  // Pad the minutes with a 0 if it's less than 10
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return `${hours}:${formattedMinutes}`
}

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  if (isToday(date)) {
    return 'Dzisiaj'
  }

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

export const formatTimeAndDate = (date, time) => {
  const dateAndTime = `${date}T${time}:00`
  return dateAndTime
}

export const getCurrentTimeISOString = () => {
  // be careful about timezones
  const date = new Date() // Or the date you'd like converted.
  const isoDateTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString()

  // remove miliseconds and T
  return isoDateTime.slice(0, -5)
}

export const getShiftedTime = (dateString, offsetHours) => {
  const date = new Date(dateString)
  date.setHours(date.getHours() + offsetHours)

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
}

export const formatDateAndTimeJakdojadeFormat = (dateStart) => {
  const date = new Date(dateStart)
  const day = ('0' + date.getDate()).slice(-2)
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const year = date.getFullYear().toString().slice(-2)
  const formattedDate = `${day}.${month}.${year}`

  const hour = ('0' + date.getHours()).slice(-2)
  const minute = ('0' + date.getMinutes()).slice(-2)
  const formattedTime = `${hour}:${minute}`

  return { formattedDate, formattedTime }
}
