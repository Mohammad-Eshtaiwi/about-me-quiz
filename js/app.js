"use strict";
const questions = [
    { question: "Is Mohammad Tall person?", yes: "oh thx brat/sestra", no: "how dare you?!", answer: "" },
    { question: "Is Mohammad a smart person?", yes: "you have to be smart to realize that", no: "how dare you?!", answer: "" },
    { question: "Is Mohammad addicted to video games?", yes: "Sadly yes", no: "Actually yes he is", answer: "" },
    { question: "Is Mohammad good at programming?", yes: "Not yet but he is doing his best", no: "He promised himself to be better and he will", answer: "" },
    { question: "Does Mohammad miss Sora?", yes: ":(", no: "Very wrong :(", answer: "" },
]
function askUser(question, onYes, onNo) {
    // added while to make validation
    while (true) {
        console.log(question);

        if (question === null) {
            question = prompt("I kindly asked to asnswer by yes or no 🔪", "yes")
            continue
        }
        question = question.toLowerCase();
        console.log(question);

        if (question === "yes") {
            alert(onYes)
            console.log(onYes);
            return question
        }

        if (question === "no") {
            alert(onNo);
            console.log(onNo);
            return question;
        }
        question = prompt("I kindly asked to asnswer by yes or no 🔪", "yes");
    }
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
alert("Please answer the following questions by yes or no");
questions.forEach(q => {
    let { question, yes, no } = q;
    q.answer = askUser(prompt(question, "no"), yes, no);
})
console.log(questions);

document.querySelector(".user").innerHTML = name;