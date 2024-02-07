function calculateGrade() {
    const assignment1 = parseFloat(document.getElementById("assignment1").value);
    const assignment2 = parseFloat(document.getElementById("assignment2").value);
 
    // Display marks in the table
    const marksTableBody = document.querySelector("#marksTable tbody");
    marksTableBody.innerHTML = ""; // Clear previous entries
 
    addMarkToTable("Assignment 1", assignment1);
    addMarkToTable("Assignment 2", assignment2);
 
    function addMarkToTable(assignmentName, score) {
        const row = marksTableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
 
        cell1.innerText = assignmentName;
        cell2.innerText = score;
    }
 
    // Calculate overall grade and average score
    const averageScore = (assignment1 + assignment2) / 2;
    let overallGrade;
 
    if (averageScore >= 90) {
        overallGrade = 'A';
    } else if (averageScore >= 80) {
        overallGrade = 'B';
    } else if (averageScore >= 70) {
        overallGrade = 'C';
    } else if (averageScore >= 60) {
        overallGrade = 'D';
    } else {
        overallGrade = 'F';
    }
 
    document.getElementById("overallGrade").innerText = overallGrade;
    document.getElementById("averageScore").innerText = averageScore.toFixed(2);
 
    // Show the table and result
    document.getElementById("marksTable").classList.remove("hidden");
    document.getElementById("result").classList.remove("hidden");
}
 
 
 
 
 
 
 
 
