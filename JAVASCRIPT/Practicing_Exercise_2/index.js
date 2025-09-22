function showArithmeticOperators() {
    let a = 15;
    let b = 10;
    
    let addition = a + b;        // 25
    let subtraction = a - b;     // 5
    let multiplication = a * b;  // 150
    let division = a / b;        // 1.5...
    let remainder = a % b;       // 1
    let exponentiation = a ** b; // 1000
    
    let output = `
        <strong>Arithmetic Operators:</strong><br><br>
        a = ${a}, b = ${b}<br><br>
        Addition (a + b): ${addition}<br>
        Subtraction (a - b): ${subtraction}<br>
        Multiplication (a * b): ${multiplication}<br>
        Division (a / b): ${division.toFixed(3)}<br>
        Remainder/Modulo (a % b): ${remainder}<br>
        Exponentiation (a ** b): ${exponentiation}<br><br>
        <em>% gives remainder, ** is exponentiation (ES2016)</em>
    `;
    
    document.getElementById('operators-output').innerHTML = output;
}
