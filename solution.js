// //tic tac toe
// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let count = 0;

// let turn0 = true;

// const winPatterns = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     // console.log("box was clicked");
//     if (turn0) {
//       box.innerText = "0";
//       turn0 = false;
//     } else {
//       box.innerText = "X";
//       turn0 = true;
//     }
//     box.disabled = true;
//     count++;

//     let isWinner = checkWinner();

//     if (count === 9 && !isWinner) {
//       gameDraw();
//     }
//   });
// });

// const gameDraw = () => {
//   msg.innerText = `Game was Draw`;
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };

// const disableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// };

// const enableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = false;
//     box.innerText = "";
//   }
// };

// const showWinner = (winner) => {
//   msg.innerText = `congratulations, the winner is ${winner}`;
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };

// const checkWinner = () => {
//   for (let pattern of winPatterns) {
//     let pos1Val = boxes[pattern[0]].innerText;
//     let pos2Val = boxes[pattern[1]].innerText;
//     let pos3Val = boxes[pattern[2]].innerText;

//     if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//       if (pos1Val === pos2Val && pos2Val === pos3Val) {
//         console.log("winner");
//         showWinner(pos2Val);
//         // boxes.forEach((box) => (box.disabled = true));
//         // return;
//       }
//     }
//   }
// };

// const resetGame = () => {
//   turn0 = true;
//   enableBoxes();
//   msgContainer.classList.add("hide");
// };

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);

//stone paper scissors
// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");

// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector("#comp-score");

// const genCompChoice = () => {
//   const options = ["rock", "paper", "scissors"];
//   const randIdx = Math.floor(Math.random() * 3);
//   return options[randIdx];
// };

// const drawGame = () => {
//   msg.innerText = "Game was Draw. Play again.";
//   msg.style.backgroundColor = "#081b31";
// };

// const showWinner = (userWin, userChoice, compChoice) => {
//   if (userWin) {
//     userScore++;
//     userScorePara.innerText = userScore;
//     msg.innerText = `You win! You chose ${userChoice} and computer's choice was ${compChoice}`;
//     msg.style.backgroundColor = "green";
//   } else {
//     compScore++;
//     compScorePara.innerText = compScore;
//     msg.innerText = `You lost.Computer chose ${compChoice} and your choice was ${userChoice}`;
//     msg.style.backgroundColor = "red";
//   }
// };

// const playGame = (userChoice) => {
//   //Generate computer choice
//   const compChoice = genCompChoice();

//   if (userChoice === compChoice) {
//     //Draw Game
//     drawGame();
//   } else {
//     let userWin = true;
//     if (userChoice === "rock") {
//       userWin = compChoice === "paper" ? false : true;
//     } else if (userChoice === "paper") {
//       userWin = compChoice === "scissors" ? false : true;
//     } else {
//       userWin = compChoice === "rock" ? false : true;
//     }
//     showWinner(userWin, userChoice, compChoice);
//   }
// };

// choices.forEach((choice) => {
//   choice.addEventListener("click", () => {
//     const userChoice = choice.getAttribute("id");
//     playGame(userChoice);
//   });
// });

// const employee = {
//   calcTax1() {
//     console.log("tax rate is 10%");
//   },
//   calctax2: function () {
//     console.log("tax rate is 10%");
//   },
// };

// const karanArjun = {
//   salary: 50000,
//   calcTax() {
//     console.log("tax rate is 20%");
//   },
// };

// const karanArjun2 = {
//   salary: 50000,
// };

// const karanArjun3 = {
//   salary: 50000,
// };

// const karanArjun4 = {
//   salary: 50000,
// };

// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;

// class ToyotaCar {
//   constructor(brand, mileage) {
//     console.log("create new object");
//     this.brand = brand;
//     this.mileage = mileage;
//   }
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }

//   // setBrand(brand) {
//   //   this.brandName = brand;
//   // }
// }

// // let fortuner = new ToyotaCar();
// // fortuner.setBrand("Fortuner");
// // let lexus = new ToyotaCar();

// let fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 12);
// console.log(lexus);

// class Parent {
//   hello() {
//     console.log("hello");
//   }
// }

// class Child extends Parent {}

// let obj = new Child();

// class Person {
//   constructor(name) {
//     this.species = "homo sapiens";
//     this.name = name;
//   }

//   eat() {
//     console.log("eat");
//   }

//   // sleep() {
//   //   console.log("sleep");
//   // }

//   // work() {
//   //   console.log("do nothing");
//   // }
// }

// class Engineer extends Person {
//   // constructor(branch) {
//   //   super();
//   //   this.branch = branch;
//   // }
//   constructor(name) {
//     super(name);
//   }
//   work() {
//     console.log("solve problems");
//   }
// }

// class Doctor extends Person {
//   work() {
//     console.log("Cure people");
//   }
// }

// let vrundaObj = new Engineer();
// console.log(vrundaObj);

// let engObj = new Engineer("Chemical");
// console.log(engObj);

// let engObj = new Engineer("Vrunda");
// console.log(engObj);

// let DATA = "secret info";

// class User {
//   constructor(name, email) {
//     this.email = email;
//     this.name = name;
//   }

//   viewData() {
//     console.log(DATA);
//   }
// }

// class Admin extends User {
//   constructor(email,name){
//     super(email,name);

//   }
//   editData() {
//     DATA = "some new value";
//   }
// }

// let student1 = new User("xyz@xmail.com", "xyz");
// let student2 = new User("abc@amail.com", "abc");
// let student3 = new User("lmn@lmail.com", "lmn");

// let admin1 = new Admin();

// function hello() {
//   console.log("hello");
// }

// setTimeout(hello, 2000);

// setTimeout(() => {
//   console.log("hello");
// }, 4000);

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, sum);
