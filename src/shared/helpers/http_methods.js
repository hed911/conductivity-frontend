export const makeGetRequest = async url => {
  const response = await fetch(url)
  return JSON.parse(await response.text())
}

export const makePostRequest = async (url, payload) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
  return JSON.parse(await response.text())
}

export const makeDeleteRequest = async url => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })
  return JSON.parse(await response.text())
}
