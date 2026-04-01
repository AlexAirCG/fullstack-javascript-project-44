import readlineSync from "readline-sync";

const evenGame = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello ${userName}!`);

  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
  let countAnswer = 0;
  while (countAnswer < 3) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);

    let correctResponse;
    if (randomNumber % 2 === 0) {
      correctResponse = "yes";
    } else {
      correctResponse = "no";
    }

    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer === correctResponse) {
      console.log("Correct!");
      countAnswer += 1;
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctResponse}`,
      );
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  return console.log(`Congratulations, ${userName}`);
};

export default evenGame;
