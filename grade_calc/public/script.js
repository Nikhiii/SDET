function calculateGrade() {
    const assignment1 = parseFloat(document.getElementById("assignment1").value);
    const assignment2 = parseFloat(document.getElementById("assignment2").value);
    const assignment3 = parseFloat(document.getElementById("assignment3").value);

    if (isNaN(assignment1) || isNaN(assignment2) || isNaN(assignment3) || assignment1 < 0 || assignment2 < 0 || assignment3 < 0 || assignment1 > 100 || assignment2 > 100 || assignment3 > 100) {
        alert("Please enter valid scores between 0 and 100 for all assignments.");
        return;
    }

    // Display marks in the table
    const marksTableBody = document.querySelector("#marksTable tbody");
    marksTableBody.innerHTML = ""; // Clear previous entries

    addMarkToTable("Assignment 1", assignment1);
    addMarkToTable("Assignment 2", assignment2);
    addMarkToTable("Assignment 3", assignment3);

    function addMarkToTable(assignmentName, score) {
        const row = marksTableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.innerText = assignmentName;
        cell2.innerText = score;
    }

    // Calculate overall grade, average score, and provide feedback
    const averageScore = (assignment1 + assignment2 + assignment3) / 3;
    let overallGrade;
    let feedback;

    if (averageScore >= 90) {
        overallGrade = 'A';
        feedback = 'Excellent!';
    } else if (averageScore >= 80) {
        overallGrade = 'B';
        feedback = 'Good job!';
    } else if (averageScore >= 70) {
        overallGrade = 'C';
        feedback = 'Keep it up!';
    } else if (averageScore >= 60) {
        overallGrade = 'D';
        feedback = 'Room for improvement.';
    } else {
        overallGrade = 'F';
        feedback = 'Needs significant improvement.';
    }

    document.getElementById("overallGrade").innerText = overallGrade;
    document.getElementById("averageScore").innerText = averageScore.toFixed(2);
    document.getElementById("feedback").innerText = feedback;

    // Show the table and result
    document.getElementById("marksTable").classList.remove("hidden");
    document.getElementById("result").classList.remove("hidden");
}
