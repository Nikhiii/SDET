document.addEventListener("DOMContentLoaded", function () {
    // Sample data for players and scores
    let players = [
        { name: "MS Dhoni", score: 91 },
        { name: "Gautam Gambhir", score: 97 },
        { name: "Jadeja", score: 18 },
        { name: "Virat Kohli", score: 35 },
        { name: "Yuvraj Singh", score: 21 }
    ];

    function populateScoreboard() {
        const scoreboard = document.querySelector(".scoreboard");
        scoreboard.innerHTML = `
            <tr>
                <th>Player</th>
                <th>Score</th>
            </tr>
            ${players.map(player => `
                <tr>
                    <td>${player.name}</td>
                    <td>${player.score}</td>
                </tr>
            `).join('')}
        `;
    }
    // Initial population of the scoreboard
    populateScoreboard();


        const sortPlayers = () => {
            const sortButton = document.querySelector("button");
            players = players.sort((a, b) => (sortButton.dataset.order === "asc") ? a.score - b.score : b.score - a.score);
            sortButton.dataset.order = (sortButton.dataset.order === "asc") ? "desc" : "asc";
            populateScoreboard();
        };
    
        const sortButton = document.querySelector("button");
        sortButton.addEventListener("click", sortPlayers);
    
    
});
