function generateRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

function shuffleArray(array: Array<unknown>): Array<unknown> {
  for (let i = 0; i < array.length; i++) {
    const rand = generateRandomInt(0, array.length - 1)
    ;[array[i], array[rand]] = [array[rand], array[i]]
  }

  return array
}

function generateNumbersGrid(size: number): Array<number> {
  const array = []

  for (let i = 0; i < size / 2; i++) {
    array.push(i)
    array.push(i)
  }
  shuffleArray(array)

  return array
}

export { shuffleArray, generateNumbersGrid }
