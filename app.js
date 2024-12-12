let userScroe =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScroePara = document.querySelector("#user-score");
const copmScroePara = document.querySelector("#comp-score");
function genCompChoice() {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame =()=> {
    console.log("Game was draw.");
    msg.innerText= "Game was draw. Play again.";
    msg.style.backgroundColor = "#081b31";

}
const showWinner = (userWin, userChoice, compChoice)=> {
    if (userWin){
        userScroe++;
        userScroePara.innerText = userScroe;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;

        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        copmScroePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame =(userChoice) => {
    console.log("userChoice = ",userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice); 

    if (userChoice === compChoice){
        // Draw Game
        drawGame();
    } else {
        let userWin =true;
        if(userChoice === "rock") {
            //scissor, paper
            userWin = compChoice === "paper" ? false : true ;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissor " ? false : true ;
        } else {
            // Rock, Paper
            userWin = compChoice === "rock " ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice); 
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});