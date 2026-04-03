import crypto from 'crypto'
import runGame from '../index.js'

const description = 'What is the result of the expression?'

const getRoundData = () => {
  const operators = ['+', '-', '*']
  const randomIndex = crypto.randomInt(0, operators.length)
  const operatorRondom = operators[randomIndex]

  const firstRondomNumber = Number(crypto.randomInt(1, 101))
  const secondRondomNumber = Number(crypto.randomInt(1, 101))

  const question = `${firstRondomNumber} ${operatorRondom} ${secondRondomNumber}`

  let sum
  switch (operatorRondom) {
    case '+':
      sum = firstRondomNumber + secondRondomNumber
      break
    case '-':
      sum = firstRondomNumber - secondRondomNumber
      break
    case '*':
      sum = firstRondomNumber * secondRondomNumber
      break
  }

  const correctAnswer = String(sum)
  return [question, correctAnswer]
}
const calculaterGame = () => runGame(description, getRoundData)

export default calculaterGame
