const order = ['Sport', 'Poziom', 'Lokalizacja', 'Grupa wiekowa', 'Płeć']

export const sortTagsByType = (tags) => {
  if (!Array.isArray(tags)) {
    return []
  }

  const tagsCopy = [...tags]

  tagsCopy.sort((a, b) => {
    const typeOrder = order.indexOf(a.type) - order.indexOf(b.type)
    if (typeOrder !== 0) {
      return typeOrder
    }
    return a.name.localeCompare(b.name)
  })

  return tagsCopy
}
