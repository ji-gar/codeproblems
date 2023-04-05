

function tournamentWinner(taskwinners, results) {
    const scores = {}; 
    let currentMaxScore = 0; 
    let currentWinner = ''; 
    for (let i = 0; i < taskwinners.length; i++) {
      const [homeTeam, awayTeam] = taskwinners[i]; 
      const winner = results[i] === 1 ? homeTeam : awayTeam; 
      scores[winner] = (scores[winner] || 0) + 3; 
      if (scores[winner] > currentMaxScore) {
        currentMaxScore = scores[winner];
        currentWinner = winner;
      }
    }
    return currentWinner; 
  }
  console.log(tournamentWinner([ ["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"] ], [ 0, 1, 1]  ))