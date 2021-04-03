const highScoresEasyList = document.getElementById('highScoresEasy');
const highScoresMediumList = document.getElementById('highScoresMedium');
const highScoresHardList = document.getElementById('highScoresHard');
const highScoresVeryHardList = document.getElementById('highScoresVeryHard');

const highScoresEasy = JSON.parse(localStorage.getItem("highScores-Easy")) || [];
const highScoresMedium = JSON.parse(localStorage.getItem("highScores-Medium")) || [];
const highScoresHard = JSON.parse(localStorage.getItem("highScores-Hard")) || [];
const highScoresVeryHard = JSON.parse(localStorage.getItem("highScores-veryHard")) || [];

//want to iterate through the high scores and for each score add an <li> to the un-ordered list.
highScoresEasyList.innerHTML = highScoresEasy
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

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