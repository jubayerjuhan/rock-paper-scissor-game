rpsGame = (yourChoice) => {
    let humanChoice = yourChoice.id;
    let botChoice = numberToMainChoice(randomNumberPick());

    let result = decideWinner(humanChoice, botChoice);
    console.log(`Computer Choice ${botChoice}`)
    console.log(result);

    let message = finalMessage(result);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);

}



randomNumberPick = () => {
    return Math.floor(Math.random() * 3);
}

numberToMainChoice = (number) => {
    return ['rock', 'paper', 'scissor'][number];
}


decideWinner = (humanChoice, computerchoice) => {
    let rpsDatabase = {
        'rock': {
            'rock': 0.5,
            'paper': 0,
            'scissor': 1
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissor': 0
        },
        'scissor': {
            'rock': 0,
            'paper': 1,
            'scissor': 0.5
        }
    }

    let yourScore = rpsDatabase[humanChoice][computerchoice]
    let computerScore = rpsDatabase[computerchoice][humanChoice]

    return [yourScore, computerScore];
}


finalMessage = ([yourScore]) => {
    if (yourScore === 0) {
        return {
            'message': 'You Lost!',
            'Color': 'Red'
        }
    } else if (yourScore === 0.5) {
        return {
            'message': 'You Tied!',
            'Color': 'Yellow'
        }
    } else {
        return {
            'message': 'You Won!',
            'Color': 'Green'
        }
    }
}


rpsFrontEnd = (humanImageChoice, botImageChoice, finalMessage) => {
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humandiv = document.createElement('div');
    let botdiv = document.createElement('div');
    let message_div = document.createElement('div');

    humandiv.innerHTML = "<img id = 'humanChoice' src = '" + imageDatabase[humanImageChoice] + "' height='150px' width='150px' style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>"
    message_div.innerHTML = "<h1 id='resultMessage' style='color:" + finalMessage['Color'] + "; font-size: 60px; padding : 30px; '>" + finalMessage['message'] + "</h1>"
    botdiv.innerHTML = "<img id = 'botChoice' src = '" + imageDatabase[botImageChoice] + "' height='150px' width='150px' style='box-shadow: 0px 10px 50px rgb(201, 70, 70)'>"

    document.getElementById('flexbox-rps-div').appendChild(humandiv);
    document.getElementById('flexbox-rps-div').appendChild(message_div);
    document.getElementById('flexbox-rps-div').appendChild(botdiv);
}


