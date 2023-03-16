let playerScore = 0;
let computerScore = 0;
let result ='';


function getComputerChoice() {
	const CHOICES = ['rock', 'paper', 'scissors'];
	return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}


function endGame(result) {
	alert(result);
	playerScore = 0;
	computerScore = 0;
	document.getElementById('youscore').innerHTML = playerScore;
	document.getElementById('pcscore').innerHTML = computerScore;
}


function playGame (playerChoice) {
	let computerChoice = getComputerChoice();
	
	if ((playerChoice == 'rock' && computerChoice == 'scissors') || 
	    (playerChoice == 'paper' && computerChoice == 'rock') || 
	    (playerChoice == 'scissors' && computerChoice == 'paper')) 
	{
		document.getElementById('you').innerHTML = playerChoice;
		document.getElementById('pc').innerHTML = computerChoice;
		document.getElementById('win').innerHTML = 'You';
		playerScore +=1;
		document.getElementById('youscore').innerHTML = playerScore;
		document.getElementById('pcscore').innerHTML = computerScore;
	}
	else if ((playerChoice == 'rock' && computerChoice == 'paper') ||
 		   (playerChoice == 'paper' && computerChoice == 'scissors') || 
		   (playerChoice == 'scissors' && computerChoice == 'rock')) 
	{
		document.getElementById('you').innerHTML = playerChoice;
		document.getElementById('pc').innerHTML = computerChoice;
		document.getElementById('win').innerHTML = 'Computer';
		computerScore +=1;
		document.getElementById('youscore').innerHTML = playerScore;
		document.getElementById('pcscore').innerHTML = computerScore;
	}
	else if (playerChoice == computerChoice) {
		document.getElementById('you').innerHTML = playerChoice;
		document.getElementById('pc').innerHTML = computerChoice;
		document.getElementById('win').innerHTML = 'none';
		document.getElementById('youscore').innerHTML = playerScore;
		document.getElementById('pcscore').innerHTML = computerScore;
	}
	else {
		alert('error');
	}
	
	if (playerScore >= 5) {
		result = 'You win!';
		setTimeout(function(){endGame(result)}, 100);
	}
	else if (computerScore >= 5) {	
		result = 'Computer wins!'
		setTimeout(function(){endGame(result)}, 100);
	}
}

document.querySelectorAll('.wbox').forEach(item => item.addEventListener('click', event => {
	playGame(item.id);
	})
)

