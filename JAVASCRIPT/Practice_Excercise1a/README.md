## 🎯 Practice Exercise 1

**Task:** Simple Grading System  

**Requirements:**  
1. Create a function `getGrade(score)`  
2. Use if/else if statements to assign grades:  
   - 90+ → "A"  
   - 80–89 → "B"  
   - 70–79 → "C"  
   - 60–69 → "D"  
   - Below 60 → "F"  
3. Return a message like: `"Score: 85 → Grade: B"`  

**Challenge:** Add a condition for perfect scores (100) that returns `"Outstanding! Grade: A+"`.

## 🎯 Practice Exercise 2

**Task:** Discount Calculator  

**Requirements:**  
1. Write a function `calculatePrice(price, customerType, isFirstPurchase)`  
2. Apply discounts:  
   - Student → 10%  
   - Senior → 15%  
   - Employee → 20%  
3. If `isFirstPurchase` is true, add an extra 5% discount  
4. Return the final price (rounded to 2 decimals)  

**Challenge:** Print a full receipt showing original price, discount percent, and final price.


## 🎯 Practice Exercise 3

**Task:** Weather Advisor  

**Requirements:**  
1. Write a function `weatherAdvice(temperature, isRaining)`  
2. Use if/else if to return advice:  
   - < 32 and raining → "Freezing rain! Stay inside!"  
   - < 32 → "Very cold, wear a heavy coat."  
   - 32–60 → "Chilly, bring a jacket."  
   - 60–80 → "Nice weather!"  
   - `>` 80 → "It's hot, stay hydrated!"  
3. Return the advice as a string  

**Challenge:** Add a ternary operator for quick advice like:  
   `"Bring an umbrella"` if raining, otherwise `"No umbrella needed"`

   **Task:** ATM Simulation  

**Requirements:**  
1. Create a function `atm(balance, action, amount)`  
2. If action is `"withdraw"`, check if balance is enough:  
   - If yes, subtract amount and return new balance  
   - If no, return `"Insufficient funds"`  
3. If action is `"deposit"`, add amount to balance and return new balance  
4. Use clear messages in template literals  

**Challenge:** Add a condition that blocks withdrawals over 500 at once.

## 🎯 Practice Exercise 5
**Tast:** Personal Assistant Function

Now let's combine everything you've learned to create a "personal assistant" function that makes smart decisions based on different inputs.

**Your Mission:**
Create a function called `personalAssistant` that:
1. Takes parameters for: time (hour), weather(sunny, rainy,cloudy), and day type(workday, weekend, holiday)
2. Uses conditional logic to give appropriate advice
3. Returns different messages based on the conditions
4. Handles various scenarios intelligently

**Requirements:**
- Use if/else statements for complex logic
- Include at least one logical operator (&&, ||, !)
- Use a ternary operator for simple decisions
- Return helpful, personalized advice
- Handle edge cases (invalid inputs)