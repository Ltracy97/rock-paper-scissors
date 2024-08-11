function getComputerChoicehelper(){

    let choices = ["rock", "paper", "scissors"];
    
    function getComputerChoice(choices){
        
        
        let choice1 = Math.floor(Math.random()*choices.length);


        return choices[choice1];


    }

    return getComputerChoice(choices);

}


function getPlayersChoice(){

    const prompt = require("prompt-sync")();
   
    let p_choice = prompt("Choose: rock, paper, or scissors: ");

   return p_choice;


}


function gamescore(){

    let winner = 0;
    
    let P_choice = getPlayersChoice();
    
    let C_choice = getComputerChoicehelper();

    if(P_choice == "rock" && C_choice == "scissors" || P_choice == "scissors" && C_choice == "paper" || P_choice == "paper" && C_choice == "rock"){
        
        return winner = 0;


    }

    else if(P_choice == C_choice){


      return  winner = -1;
    }

    else{

        return winner = 1;
    
    }
}

function playgame(){
    var human_score = 0;

    var computer_score = 0;

    var result = 0;

    while(human_score != 5 && computer_score != 5){

        result = gamescore();

        if(result == 0){

            human_score = human_score + 1;
            console.log('you won the round human score:' ,human_score, 'out of 5');

        }

        else if(result == 1){

            computer_score = computer_score + 1;

            console.log('you lost the round computer score:' , computer_score, 'out of 5');

        }

        else{

            console.log("A tie");

        }


    }

    if(computer_score < human_score){

        console.log("you won");

    }


    else{

        console.log("you lost");

    }
}


playgame();