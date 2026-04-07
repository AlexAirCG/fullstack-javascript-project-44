import getRandomNumer from '../utils/random.js'
import runGame from '../index.js'

const description = 'What number is missing in the progression?'

const getRoundData = () => {
  const progressionLigth = getRandomNumer(5, 10)
  const firstNumOfProgress = getRandomNumer(1, 50)
  const stepOfProgress = getRandomNumer(1, 6)
  const hiddenNum = getRandomNumer(0, progressionLigth - 1)

  let strProgress = ''
  let correctAnswer
  for (let i = 0; i < progressionLigth; i += 1) {
    const currentNum = firstNumOfProgress + stepOfProgress * i
    if (i === hiddenNum) {
      strProgress += '.. '
      correctAnswer = String(currentNum)
    }
    else {
      strProgress += currentNum + ' '
    }
  }

  const question = strProgress.trim()

  return [question, correctAnswer]
}

const progressionGame = () => runGame(description, getRoundData)

export default progressionGame
