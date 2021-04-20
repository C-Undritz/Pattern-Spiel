//The below JavaScript code was learnt and adapted from 'James Q Quick' channel YouTube video:
//'Build a Quiz App (9):Load and Display High Scores from Local Storage'(https://www.youtube.com/watch?v=jfOv18lCMmw)

//assigns variables to HTML <ol> elements in highscores.html where 'Easy', 'Medium'. 'Hard' and 'Very hard' difficulty high scores to be displayed.
const highScoresEasyList = document.getElementById('highScoresEasy');
const highScoresMediumList = document.getElementById('highScoresMedium');
const highScoresHardList = document.getElementById('highScoresHard');
const highScoresVeryHardList = document.getElementById('highScoresVeryHard');

//assigns variables to 'Easy', 'Medium', 'Hard' and 'Very hard' highscores objects from local storage or an empty array if nothing returned.
const highScoresEasy = JSON.parse(localStorage.getItem("highScores-Easy")) || []; 
const highScoresMedium = JSON.parse(localStorage.getItem("highScores-Medium")) || []; 
const highScoresHard = JSON.parse(localStorage.getItem("highScores-Hard")) || []; 
const highScoresVeryHard = JSON.parse(localStorage.getItem("highScores-veryHard")) || [];

/*using map() method; interate through the high scores for each difficulty and for each item return an <li> element with player name and score which is 
then set as the innerHTML of the <ol> for each difficulty*/ 
highScoresEasyList.innerHTML = highScoresEasy
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join(""); //joins all elements in the array created with map() method

highScoresMediumList.innerHTML = highScoresMedium
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

highScoresHardList.innerHTML = highScoresHard
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

highScoresVeryHardList.innerHTML = highScoresVeryHard
  .map(score => {
    return `<li class="high-score">${score.name} - 
    ${score.score}</li>`;
  })
  .join("");