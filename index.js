const players = {
    player1: {
      name: "Player 1",
      position: "Midfielder",
      goals: 12,
      assists: 8,
      team: "Red Hawks",
    },
    // Add more predefined players here
  };
  
  function selectPlayer(playerId) {
    const player = players[playerId];
    if (player) {
      const playerInfo = document.getElementById("player-info");
      playerInfo.innerHTML = `
        <h2>${player.name}</h2>
        <p>Position: ${player.position}</p>
        <p>Goals: ${player.goals}</p>
        <p>Assists: ${player.assists}</p>
        <p>Team: ${player.team}</p>
      `;
    }
  }
  