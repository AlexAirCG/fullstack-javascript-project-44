import crypto from 'crypto'
import runGame from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getRoundData = () => {
  const number = crypto.randomInt(1, 101)

  const isPrimeFast = (number) => {
    if (number <= 1) return false
    if (number <= 3) return true // 2 и 3 — простые
    if (number % 2 === 0 || number % 3 === 0) return false

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false
    }
    return true
  }

  const question = number
  const correctAnswer = isPrimeFast(number) ? 'yes' : 'no'

  return [question, correctAnswer]
}

const primeGame = () => runGame(description, getRoundData)

export default primeGame
