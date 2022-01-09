interface Body {
  [Key: string]: string | string[] | null
}
export const postConfig = (payload: Body): RequestInit => {
  return {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  }
}
