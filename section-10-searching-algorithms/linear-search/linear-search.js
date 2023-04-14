const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    let isEqualValues = arr[i] === val
    if (isEqualValues) {
      return i
    }
  }
  return -1
}

module.exports = {
  linearSearch
}
