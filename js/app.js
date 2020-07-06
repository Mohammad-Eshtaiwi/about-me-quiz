"use strict";
function askUser(question, onYes, onNo) {
    // added while to make validation
    while (true) {
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
const name = prompt("What is your name", "user");
alert(`Welcome ${name} to my website`);
alert("Please answer the following questions by yes or no");
//is tall
const isTall = askUser(prompt("Is Mohammad Tall person?", "no"), "oh thx brat/sestra", "how dare you?!");
console.log(isTall);

//is smart
const isSmart = askUser(prompt("Is Mohammad a smart person?", "no"), "you have to be smart to realize that", "how dare you?!");

//is adicted
const isAddicted = askUser(prompt("Is Mohammad addicted to video games?", "no"), "Sadly yes", "Actually yes he is");

//is programer

let isProgramer = askUser(prompt("Is Mohammad good at programming?", "no"), "Not yet but he is doing his best", "He promised himself to be better and he will")

//miss sora
const isMissSora = askUser(prompt("Does Mohammad miss Sora?", "no"), ":(", "Very wrong");

console.log(isTall, isAddicted, isProgramer, isSmart, isMissSora);
document.querySelector(".user").innerHTML = name