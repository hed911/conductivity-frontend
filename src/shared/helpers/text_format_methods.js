export const isValidTextArray = text => {
  const validChars = ["0", "1", ",", '\n']
  return text.split('').every(char => {
    return validChars.indexOf(char) !== -1
  })
}

export const textTo2DArray = text => {
  return text.split('\n').map(innerText => stringArrayToNum(innerText.split(",")))
}

const stringArrayToNum = array => {
  return array.map(char => parseInt(char))
}