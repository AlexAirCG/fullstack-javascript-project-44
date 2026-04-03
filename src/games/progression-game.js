import crypto from 'crypto'
import runGame from '../index.js'

const description = 'What number is missing in the progression?'

const getRoundData = () => {
  const progressionLigth = crypto.randomInt(5, 11)
  const firstNumOfProgress = crypto.randomInt(1, 50)
  const stepOfProgress = crypto.randomInt(1, 6)
  const hiddenNum = crypto.randomInt(0, progressionLigth)

  let strProgress = ''
  let correctAnswer
  for (let i = 0; i < progressionLigth; i += 1) {
    const currentNum = firstNumOfProgress + stepOfProgress * i
    if (i === hiddenNum) {
      strProgress += '.. '
      correctAnswer = String(currentNum)
    } else {
      strProgress += currentNum + ' '
    }
  }

  const question = strProgress.trim()

  return [question, correctAnswer]
}

const progressionGame = () => runGame(description, getRoundData)

export default progressionGame
