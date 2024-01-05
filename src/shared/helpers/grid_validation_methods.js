import { isSquare } from "./array_methods"
import { isValidTextArray, textTo2DArray } from "./text_format_methods"

export const isValidGrid = text => {
  if (!isValidTextArray(text)) {
    return false
  }

  const array = textTo2DArray(text)
  if (!isSquare(array)) {
    return false
  }

  const uniqueElements = [...new Set(array.flat())]
  if (uniqueElements.length > 2 || uniqueElements.every(e => e !== 0 && e !== 1)) {
    return false
  }

  return true
}