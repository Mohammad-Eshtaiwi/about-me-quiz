"use strict";
const questions = [
    { question: "Is Mohammad Tall person?", yes: { message: "oh thx brat/sestra", isTrue: true }, no: { message: "how dare you?!", isTrue: false }, answer: "" },
    { question: "Is Mohammad a smart person?", yes: { message: "you have to be smart to realize that", isTrue: true }, no: { message: "how dare you?!", isTrue: false }, answer: "" },
    { question: "Is Mohammad addicted to video games?", yes: { message: "Sadly yes", isTrue: true }, no: { message: "Actually yes he is", isTrue: false }, answer: "" },
    { question: "Is Mohammad good at programming?", yes: { message: "Not yet but he is doing his best", isTrue: false }, no: { message: "He promised himself to be better and he will", isTrue: true }, answer: "" },
    { question: "Does Mohammad miss Sora?", yes: { message: ":(", isTrue: true }, no: { message: "Very wrong :(", isTrue: false }, answer: "" },
]
let score = 0
function askUser(question, onYes, onNo) {
    // added while to make validation
    while (true) {
        // console.log(question);

        if (question === null) {
            question = prompt("I kindly asked to asnswer by yes or no or y or n 🔪", "yes")
            continue
        }
        question = question.toLowerCase();
        // console.log(question);

        if (question === "yes" || question === "y") {
            alert(onYes.message)
            // console.log(onYes.message);
            return onYes.isTrue
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
    const number = Math.floor((Math.random() * range) + 1);
    // console.log(number);
    let answer = parseInt(prompt(`please enter a number between 1 and 10 and you have ${attmeps} trys \n if you clicked cancel or entered empty answer you will lose but at least you will live`))
    // console.log(answer);

    for (let i = 1; i < attmeps; i++) {
        if (answer > number || isNaN(answer)) {
            answer = parseInt(prompt(`your answer is too high and you have ${attmeps - (i)} trys \n if you clicked cancel or entered empty answer you will lose but at least you will live`))
        }
        if (answer < number) {
            answer = parseInt(prompt(`your answer is too low and you have ${attmeps - (i)} trys \n if you clicked cancel or entered empty answer you will lose but at least you will live`))
        }
        if (answer == number) {
            alert("well done! you are really smart")
            return 1
        }
    }
    alert("Game Over")
    return 0
}
function maltipleChoice(attmeps = 6) {
    let count = 0;
    const answers = [
        { name: "katkoota", isTrue: false, key: 1 },
        { name: "basboosa", isTrue: false, key: 2 },
        { name: "sora", isTrue: true, key: 3 },
        { name: "elmoza 78te", isTrue: false, key: 4 },
    ]
    let firstMessage = `use the key number to answer
    \n you have ${attmeps} attmeps
    \n if you clicked cancel or entered empty answer you will lose but at least you will live
    \n Q.what was my cat name 
    \n 1.${answers[0].name} 
    \n 2.${answers[1].name} 
    \n 3.${answers[2].name}
    \n 4.${answers[3].name}
    `
    let question = parseInt(
        prompt(
            firstMessage
        ));
    while (true) {
        //if you have 0 attmeps or youclicked cancel or entered empty answer you will lose but at least you will live
        // console.log(question);

        // if (isNaN(question)) break;

        if ((attmeps - count) === 1) break;
        // if he answered correctly we will win
        if (question === answers[2].key) {
            alert("Well done!");
            return 1;
        }
        if (question !== answers[2].key || isNaN(question)) {
            parseInt(prompt(`use the key number to answer
            \n you have ${attmeps - (count + 1)} attmeps
            \n if you clicked cancel or entered empty answer you will lose but at least you will live
            \n Q.what was my cat name 
            \n 1.${answers[0].name} 
            \n 2.${answers[1].name} 
            \n 3.${answers[2].name} 
            \n 4.${answers[3].name}`));
            count++;
            continue;
        }
    }
    return 0
}
//  ask for name
let name
while (true) {
    name = prompt("What is your name", "user");
    if (name === null || name === "")
        continue;
    break;
}
alert(`Welcome ${name} to my website`);
alert("Please answer the following questions by yes or no or y or n");
questions.forEach(q => {
    let { question, yes, no } = q;
    q.answer = askUser(prompt(question, "no"), yes, no);
    // if the user answered by yes then he will get a score
    if (q.answer) score++;
})
// console.log(questions);


score += guessNumber() + maltipleChoice();

document.querySelector(".user").innerHTML = name;
document.querySelector(".score").innerHTML = score;