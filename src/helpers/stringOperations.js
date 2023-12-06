export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getInitials = (str1 = 'Twój', str2 = 'profil') => {
  return `${str1?.charAt(0) || 'T'}${capitalize(str2?.charAt(0)) || 'P'}`
}
