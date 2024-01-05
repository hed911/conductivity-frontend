export const initGrid = size => {
  return Array(size).fill().map(() => Array(size).fill(0))
}

export const isSquare = array => array.every(subarray => array.length === subarray.length)

export const randomize2DArray = array => {
  const result = structuredClone(array)
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      result[i][j] = Math.round(Math.random())
    }
  }
  return result
}