import crypto from 'crypto'
import runGame from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const getRoundData = () => {
  const firstRondomNumber = Number(crypto.randomInt(1, 101))
  const secondRondomNumber = Number(crypto.randomInt(1, 101))

  const question = `${firstRondomNumber} ${secondRondomNumber}`

  const gcd = (a, b) => {
    a = Math.abs(a)
    b = Math.abs(b)

    while (b !== 0) {
      let temp = b
      b = a % b
      a = temp
    }
    return a
  }

  const correctAnswer = String(gcd(firstRondomNumber, secondRondomNumber))

  return [question, correctAnswer]
}

const gcdGame = () => runGame(description, getRoundData)

export default gcdGame
