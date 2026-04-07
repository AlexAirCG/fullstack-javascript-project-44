import getRandomNumer from '../utils/random.js'
import runGame from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const getRoundData = () => {
  const randomNumber = getRandomNumer(1, 101)
  const question = String(randomNumber)
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'

  return [question, correctAnswer]
}

const evenGame = () => runGame(description, getRoundData)

export default evenGame
