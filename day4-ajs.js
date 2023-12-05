function decode(message) {
  let storage = []
  let result = ''

  for (let i of message) {
    if(i == '(') {
      storage.push('')
    } else if (i == ')') {
      let reversed = [...storage.pop()].reverse().join('');
      if (storage.length == 0) {
        result += reversed
      } else {
        storage[storage.length - 1] += reversed;
      }
    } else {
      if (storage.length == 0) {
        result += i;
      } else {
        storage[storage.length-1] += i;
      }
    }
  }
  return result
}
