

function getGrade(score) {
    if (score == 100) {
        return "Outstanding! Grade: A+";
    } else if (score >= 90 && score <= 99) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69)
        return "D"
    else if (score <= 60)
        return "F"
}
console.log(getGrade(120))

function calculatePrice(price, customerType, isFirstPurchase) {
    let discount = 0;

    if (customerType === "student") {
        discount = 0.10;
    } else if (customerType === "senior") {
        discount = 0.15;
    } else if (customerType === "employee") {
        discount = 0.20;
    }
    //  Additional discount for first-purchase 
    if (isFirstPurchase) {
        discount += 0.05;
    }
    let finalPrice = price * (1 - discount);
    return {
        originalPrice: price,
        discountPercent: discount.toFixed(2) * 100,
        finalPrice: finalPrice.toFixed(2)
    };
}
//  Test discount function
let result = calculatePrice(100, "student", false)
console.log("Price calculation:");
console.log(`Original: $${result.originalPrice}`);
console.log(`Discount: ${result.discountPercent}%`);
console.log(`Final price: $${result.finalPrice}`);

function weatherAdvice(temperature, isRaining) {
    if (temperature < 32 && isRaining) {
        return "Freezing rain! Stay inside!";
    } else if (temperature < 32) {
        return "Very cold, wear a heavy coat.";
    } else if (temperature >= 32 && temperature <= 60) {
        return "Chilly, bring a jacket.";
    } else if (temperature >= 60 && temperature <= 80) {
        return "Nice weather";
    } else if (temperature > 80){
        return "It's hot, stay hydrated!";
    }
        
    let advice = isRaining ? "bring an umbrella": "No umbrella needed"; 
    console.log(advice);

}
    // console.log("")
    weatherAdvice(30, true)
    // let weatherAdvisor = weatherAdvice(32, true)
    // console.log("weatherAdvice: ")
    // console.log(`weather Advisor: ${weatherAdvisor}`);





function atm(balance, action, amount) {
    if (action === "withdraw")
        if (amount > 500) {
            return "Withdrawal limit exceeded: You cannot withdraw above 500";
        } else if (balance >= amount) {
            return ` Withdrawal succesful. New balance: ${balance -= amount}`
        } else {
            return `Insufficient funds. Your balance is: $${balance}`;
        } else if (action === "deposit") {
            return ` Deposit successful. New balance: ${balance += amount}`;
        } else {
            return "Invalid action.";
        }
    }
    
console.log("ATM Transaction:");
console.log(atm(1000, "withdraw", 200))
console.log(atm(1000, "withdraw", 700));
console.log(atm(350, "withdraw", 400));
console.log(atm(1000, "deposit", 1000));
console.log(atm(1000, "check", 500))


// function personalAssistant (time, weather, dayType){
//     let parameters={
//         time: ["hour"],
//         weather: ["sunny", "rainy", "cloudy"],
//         dayType: ["workday", "weekend", "holiday"]
//     }
//     if parameters()
        
//     }
// }
