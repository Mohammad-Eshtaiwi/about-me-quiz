"use strict";
const questions = [
  {
    question: "Is Mohammad Tall person?",
    yes: { message: "oh thx brat/sestra", isTrue: true },
    no: { message: "how dare you?!", isTrue: false },
    answer: "",
  },
  {
    question: "Is Mohammad a smart person?",
    yes: { message: "you have to be smart to realize that", isTrue: true },
    no: { message: "how dare you?!", isTrue: false },
    answer: "",
  },
  {
    question: "Is Mohammad addicted to video games?",
    yes: { message: "Sadly yes", isTrue: true },
    no: { message: "Actually yes he is", isTrue: false },
    answer: "",
  },
  {
    question: "Is Mohammad good at programming?",
    yes: { message: "Not yet but he is doing his best", isTrue: false },
    no: {
      message: "He promised himself to be better and he will",
      isTrue: true,
    },
    answer: "",
  },
  {
    question: "Does Mohammad miss Sora?",
    yes: { message: ":(", isTrue: true },
    no: { message: "Very wrong :(", isTrue: false },
    answer: "",
  },
];
let score = 0;
function askUser(question, onYes, onNo) {
  // added while to make validation
  while (true) {
    // console.log(question);

    if (question === null) {
      question = prompt(
        "I kindly asked to asnswer by yes or no or y or n 🔪",
        "yes"
      );
      continue;
    }
    question = question.toLowerCase();
    // console.log(question);

    if (question === "yes" || question === "y") {
      alert(onYes.message);
      // console.log(onYes.message);
      return onYes.isTrue;
    }

    if (question === "no" || question === "n") {
      alert(onNo.message);
      // console.log(onNo.message);
      return onNo.isTrue;
    }
    question = prompt("I kindly asked to asnswer by yes or no 🔪", "yes");
  }
}
// gusse the number
function guessNumber(attmeps = 4, range = 10) {
  const number = Math.floor(Math.random() * range + 1);
  let answer = parseInt(
    prompt(
      `please enter a number between 1 and 10 and you have ${attmeps} trys \n if you clicked cancel or entered empty answer you will lose but at least you will live`
    )
  );
  // console.log(answer);

  for (let i = 1; i < attmeps; i++) {
    if (answer > number || isNaN(answer)) {
      answer = parseInt(
        prompt(
          `your answer is too high and you have ${
            attmeps - i
          } trys \n if you clicked cancel or entered empty answer you will lose but at least you will live`
        )
      );
    }
    if (answer < number) {
      answer = parseInt(
        prompt(
          `your answer is too low and you have ${
            attmeps - i
          } trys \n if you clicked cancel or entered empty answer you will lose but at least you will live`
        )
      );
    }
    if (answer == number) {
      alert("well done! you are really smart");
      return 1;
    }
  }
  alert("Game Over");
  return 0;
}
function maltipleChoice(attmeps = 6) {
  let count = 0;

  const answers = ["katkoota", "basboosa", "sora", "elmoza 78te"];

  let question = prompt(`try to geuss my cat's name and you have ${attmeps}`);

  while (true) {
    // console.log(question);

    if (attmeps - count === 1) break;

    if (question === null) {
      count++;
      question = prompt(
        `try to geuss my cat's name and you have ${attmeps - count}`
      );
    }
    // if he answered correctly it will win
    for (let index = 0; index < answers.length; index++) {
      if (answers[index] === question) {
        alert("Well done!");
        return 1;
      }
    }
    // console.log(count);

    question = prompt(
      `try to geuss my cat's name and you have ${attmeps - count - 1}`
    );
    count++;
  }
  return 0;
}
//  ask for name
let name;
while (true) {
  name = prompt("What is your name", "user");
  if (name === null || name === "") continue;
  break;
}
alert(`Welcome ${name} to my website`);
alert("Please answer the following questions by yes or no or y or n");
questions.forEach((q) => {
  let { question, yes, no } = q;
  q.answer = askUser(prompt(question, "no"), yes, no);
  // if the user answered by yes then he will get a score
  if (q.answer) score++;
});
// console.log(questions);

score += guessNumber() + maltipleChoice();

document.querySelector(".user").innerHTML = name;
document.querySelector(".score").innerHTML = score;
