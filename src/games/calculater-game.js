import getRandomNumer from '../utils/random.js'
import runGame from '../index.js'

const description = 'What is the result of the expression?'

const getRoundData = () => {
  const operators = ['+', '-', '*']
  const randomIndex = getRandomNumer(0, operators.length - 1)
  const operatorRondom = operators[randomIndex]

  const firstRondomNumber = getRandomNumer(0, 100)
  const secondRondomNumber = getRandomNumer(0, 100)

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
