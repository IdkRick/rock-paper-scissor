const game = () => {
   let pScore = 0;
   let cScore = 0;

   //Start the game
   const startGame = () => {
      const playBtn = document.querySelector('.intro button');
      const introScreen = document.querySelector('.intro');
      const match = document.querySelector('.match');

      playBtn.addEventListener('click', () => {
         introScreen.classList.add('fadeOut');
         match.classList.add('fadeIn');
      });
   };

   //Play Match
   const playMatch = () => {
      const options = document.querySelectorAll('.options button');
      const playerHand = document.querySelector('.player-hand');
      const computerHand = document.querySelector('.computer-hand');
      const hands = document.querySelectorAll('.hands img');

      hands.forEach(hand => {
         hand.addEventListener('animationend', function () {
            this.style.animation = '';
         });
      });
      //Computer Options
      const computerOptions = ['rock', 'paper', 'scissors'];

      options.forEach(option => {
         option.addEventListener('click', function () {
            //Computer Choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

            setTimeout(() => {
               //Here is where we call compare hands
               compareHands(this.textContent, computerChoice);
               //Updade Images
               playerHand.src = `img/${this.textContent}.png`;
               computerHand.src = `img/${computerChoice}.png`;
            }, 2000);

            //Hand Animation
            playerHand.style.animation = 'shakePlayer 2s ease';
            computerHand.style.animation = 'shakeComputer 2s ease';
         });
      });
   };

   //Updade Score
   const updadeScore = () => {
      const playerScore = document.querySelector('.player-score p');
      const computerScore = document.querySelector('.computer-score p');
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
   };

   //Compare Hands
   const compareHands = (playerChoice, computerChoice) => {
      //Updade Text
      const winner = document.querySelector('.winner');
      //Checking for a tie
      if (playerChoice === computerChoice) {
         winner.textContent = 'It is a tie!';
         return;
      }
      //Check for Rock
      if (playerChoice === 'rock') {
         if (computerChoice === 'scissors') {
            winner.textContent = 'Player Wins!';
            pScore++;
            updadeScore();
            return;
         } else {
            winner.textContent = 'Computer Wins!';
            cScore++
            updadeScore();
            return;
         }
      }

      //Check for Paper
      if (playerChoice === 'paper') {
         if (computerChoice === 'scissors') {
            winner.textContent = 'Computer Wins!';
            cScore++
            updadeScore();
            return;
         } else {
            winner.textContent = 'Player Wins!';
            pScore++;
            updadeScore();
            return;
         }
      }

      //Check for Scissors
      if (playerChoice === 'scissors') {
         if (computerChoice === 'rock') {
            winner.textContent = 'Computer Wins';
            cScore++
            updadeScore();
            return;
         } else {
            winner.textContent = 'Player Wins!';
            pScore++;
            updadeScore();
            return;
         }
      }
   };

   //Call all the inner function
   startGame();
   playMatch();
};
//Start the game function
game();