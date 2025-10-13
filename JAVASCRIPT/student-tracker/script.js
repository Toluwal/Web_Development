document.getElementById("add").style.display = "block";


let studentData =  JSON.parse(localStorage.getItem('students'))||[];
function add() {
    let studentName = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let studentClass = document.getElementById("class").value;
    let studentProfileImage = document.getElementById("image").value;
    let mathScore = parseFloat(document.getElementById("mathematics").value);
    let englishScore = parseFloat(document.getElementById("english").value);
    let chemistryScore = parseFloat(document.getElementById("chemistry").value);
    let averageScore = calculateAverage(mathScore, englishScore, chemistryScore);
    let performanceCategory = getPerformanceCategory(averageScore);

    let userData = {studentName, age, studentClass, studentProfileImage, mathScore, englishScore, chemistryScore, averageScore, performanceCategory }
    studentData.push(userData);
    localStorage.setItem("students", JSON.stringify(studentData));

    viewdisplay()

    document.querySelectorAll("input").forEach(input => input.value = "");
    }


function calculateAverage(mathScore, englishScore, chemistryScore) {
   let avg = (mathScore + englishScore + chemistryScore) / 3;
   return avg.toFixed(2)
}

function getPerformanceCategory(averageScore) {
    if (averageScore >= 75) return {
        text: "Excellent",
        class: "excellent"
     }; else if (averageScore >= 50 && averageScore <= 74) return {
        text: "Good",
        class: "good"
     }; return {
        text: "Needs Help",
        class: "needs" 
     }

} 

function remove(index) {
    let confirmDelete = confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
        studentData.splice(index, 1); 
        viewdisplay()
    }
}
function viewdisplay() {
    document.getElementById("display").innerHTML = "";
    for (let i = 0; i < studentData.length; i++) {
        document.getElementById("display").innerHTML += `
        <tr>
        <td> ${i + 1}</td>
        <td><img src ="${studentData[i].studentProfileImage}" width = "50" height=50"></td>
        <td> ${studentData[i].studentName}</td>
        <td> ${studentData[i].studentClass}</td>
        <td> ${studentData[i].averageScore}</td>
        <td class="${studentData[i].performanceCategory.class}">
                ${studentData[i].performanceCategory.text}</td>
        <td> <button class="delete" onclick="remove(${i})">Delete</button></td>
        
        </tr>`;
        
    }
}