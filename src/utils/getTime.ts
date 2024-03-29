export const getDayTime = (timestamp: number) => {
  const date = new Date(timestamp)
  return date.toLocaleString('sv-SE').substring(5, 16)
}

export const getTime = (timestamp: number) => {
  const date = new Date(timestamp)
  return date.toLocaleString('sv-SE').substring(11, 16)
}

export const getDay = (timestamp: number) => {
  const date = new Date(timestamp)
  return date.toLocaleString('sv-SE').substring(5, 10)
}

export const getDate = (timestamp: number) => {
  const dateObj = new Date(timestamp)
  return dateObj.toLocaleString('sv-SE', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  })
}
