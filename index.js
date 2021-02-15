var readlineSync = require('readline-sync');
const chalk = require('chalk');
var playScore = 0;

var userName = readlineSync.question('Give me your name? ');
console.log(chalk.yellow("Hi "+userName+"! welcome to punya's quiz"));

var questions = [
  {
  question:"where does she work?\n1.cloudgate\n2.google\n3.netapp\n",
  answer:"1"
  },
  {
  question:"what is her favorite food?\n1.pasta\n2.pizza\n3.burger\n",
  answer:"2"
  },
  {
  question:"what is her favorite colour?\n1.blue\n2.black\n3.white\n",
  answer:"1"
  },
  {
  question:"what is her favorite place?\n1.temple\n2.cafe\n3.beach\n",
  answer:"3"
  },
  {
  question:"what would she do in her free time?\n1.watching tv\n2.singing\n3.painting\n",
  answer:"2"
  }
]

var highScore = [
  {
    name:"punya",
    score:"4"
  },
  {
    name:"soumya",
    score:"3"
  }
]
function playGame(question,answer) {
  var userAnswer = readlineSync.question(question);
  
  if (userAnswer === answer){
    console.log(chalk.green("You entered "+answer));
    console.log(chalk.green("You are right"));
    playScore = playScore+1;    
  } else {
    console.log(chalk.green("You entered "+answer));
    console.log(chalk.green("you are wrong"));
  }
  console.log(chalk.red("Score is "+playScore));
}

for (var i=0;i<questions.length;i=i+1){
  var answerloop = questions[i];
  playGame(answerloop.question,answerloop.answer);
  }

var newUser = {
  name:userName,
  score:playScore
}
highScore.push(newUser);

console.log(chalk.blackBright.red("\n\nHere is the final score :"));
for (var j=0;j<highScore.length;j=j+1){
  var userScore = highScore[j];  
  console.log(chalk.green(userScore.name,userScore.score));
  }


