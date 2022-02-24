export const getDay = (unixTimeStamp: number) => {
  const date = new Date(unixTimeStamp)
  return date.toLocaleString('sv-SE').substring(5, 10)
}
