// Practice Exercise 6

// Creating a validation function
        function isStrongPassword(password) {
            if (typeof password !== 'string') return false;

            let lengthCharacter = password.length >= 8;
            let hasNumber = /[0-9]/.test(password);
            // common special characters (excludes space)
            let hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(password);

            return lengthCharacter && hasNumber && hasSpecialCharacter;
        }
        console.log(isStrongPassword("bolade@23"));

        // Creating a formatter function
        function formatPercentage(value) {
            return `$${value.toFixed(1)}%`;
        }
        console.log(formatPercentage(123.7845));

        // Creating Calculator function

        function CalculateCompoundInterest(principal, rate, years) {
            return principal * (1 + rate) ** years;
        }
        console.log(CalculateCompoundInterest(1200, 0.05, 4).toFixed(2));

        // Creating a decision maker function
        function canGraduate(credits, gpa) {
            if (credits >= 120 && gpa >= 2.0) {
                return "You can graduate";

            } else {
                return "You have an extra year";
            }
        }
        console.log(canGraduate(100, 3.5));

        // create a utility function
        function reverseWord(sentence) {
            return sentence.split("").reverse().join("");
            }
        let originalSentence = "I am a Developer";
        let reversedSentence = reverseWord(originalSentence)
        console.log(reversedSentence);


    // Practice Exercise 7

    function productCalculator(price, productType, isWholesaler) {
            let discount = 0;
            if (productType === "Coke") {
                discount = 0.01;
            } else if(productType === "Fanta") {
                discount = 0.01;
            } else if (productType === "Schweppes"){
                discount = 0.05;
            } else if (productType === "Five alive"){
                discount = 0.10;
            }
            if (isWholesaler) {
                discount += 0.20;
            }
            let finalPrice = price * (1 - discount);
            return {
                originalPrice: price,
                discountPercent: discount * 100,
                finalPrice: finalPrice.toFixed(2)
            };
        }

        let result = productCalculator(600, "coke", true);
        console.log("Product Calculator:");
        console.log(`Original: $${result.originalPrice}`);
        console.log(`Discount: ${result.discountPercent}%`);
        console.log(`final Price: $${result.finalPrice}`);


        function taxCalculator(payment, location) {
            let taxRate = 0;
            if (location === "Abuja") {
                taxRate = 0.10;
            } if (location === "Lagos") {
                taxRate = 0.20;
            } if (location === "Ibadan") {
                taxRate = 0.05;
            } if (location === "Asaba"){
                taxRate = 0.15;
            }
        
        let finalTaxPayment = payment * (1- taxRate);
        return {
            orignalPayment: payment,
            taxRatePercent: taxRate * 100,
            finalTaxPayment: finalTaxPayment.toFixed(2)
        };
        }
    
        let payment = taxCalculator(5000, "Lagos")
        console.log('Tax calculator');
        console.log(`original: $${payment.orignalPayment}`);
        console.log(`Tax Rate: ${payment.taxRatePercent}%`);
        console.log(`Final Tax Payment: $${payment.finalTaxPayment}`);

        function shippingCalculator(weight, distance) {
            let cost = 0;
            if (weight <= 50 && distance <= 100){
                cost = (weight * 5) + (distance * 0.5)
            } else if (weight>50 && distance > 100) {
                cost = (weight * 3) + (distance * 0.3) 
            } else {
                cost = (weight * 2) + (distance * 0.2);
            }
            return cost;

        }

        console.log(shippingCalculator(50, 100))
        console.log(shippingCalculator(75, 100))
        

        function membershipDiscount(total, memberBenefit){ 
            let discount = 0;
            if (memberBenefit === "Basic membership"){
                discount = 0.05;
            } else if (memberBenefit ==="Premium membership"){
                discount = 0.10;
            } else if (memberBenefit === "Family membership" ){
                discount = 0.20;
            }
            return total - (total * discount);
        }
        console.log(membershipDiscount (4500, "Basic membership"));
        console.log(membershipDiscount (4500, "Premium membership"));
        console.log(membershipDiscount (4500, "Family membership"));

        // Receipt Generator
function generateReceipt(price, productType, isWholesaler, location, weight, distance, memberBenefit) {
    console.log("----- FINAL RECEIPT -----");

    // 1. Product + discount
    let product = productCalculator(price, productType, isWholesaler);
    console.log(`Product: ${productType}`);
    console.log(`Original Price: $${product.originalPrice}`);
    console.log(`Discount Applied: ${product.discountPercent}%`);
    console.log(`Price After Discount: $${product.finalPrice}`);

    // 2. Shipping cost
    let shipping = shippingCalculator(weight, distance);
    console.log(`Shipping Cost: $${shipping.toFixed(2)}`);

    // 3. Tax
    let tax = taxCalculator(Number(product.finalPrice) + shipping, location);
    console.log(`Location: ${location}`);
    console.log(`Tax Rate: ${tax.taxRatePercent}%`);
    console.log(`Price After Tax: $${tax.finalTaxPayment}`);

    // 4. Membership Discount
    let finalTotal = membershipDiscount(Number(tax.finalTaxPayment), memberBenefit);
    console.log(`Membership: ${memberBenefit}`);
    console.log(`Final Payable Amount: $${finalTotal.toFixed(2)}`);

    console.log("--------------------------");
    return finalTotal;
    let membership = isMember = true ? "Premium": "Basic" 
}
