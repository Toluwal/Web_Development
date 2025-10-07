// Practice Exercise 3
function tellJoke() {
    return new Promise(function(resolve){
        setTimeout(() =>{
            resolve("Here's a funny Joke");
        }, 3000);
    });
}

tellJoke()
.then(function(joke) {
    console.log("Tell Joke:", joke);

})
.catch(function(error) {
console.log("Error:", error)
});



//  Practice Exercise 2

function deliverOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() < 0.5;
            if (success) {
                resolve(`Delivered:" ${order}`);
            } else {
                reject(`DeliveryFailed:" ${order}`);
            }
        }, 2000);
    });
}

deliverOrder("Beans and plantain")
.then(function(order) {
    console.log(` ${order}`);

})
.catch(function(error) {
console.log("Error:", error)
});




// Practice Exercise 3 

function processOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let orders = ["coffee", "Cake", "Juice"];
            if (orders.length > 0) {
                resolve(orders);
            } else {
                reject("No order placed");
            }
        }, 2000);
    });
}
async function orderDetails() {
    try {
        console.log("placing order...");
        let result = await processOrder();
        console.log("Order ready!");
        result.forEach((orders, index) => {
            console.log(`Order ${index + 1}: ${orders}`);
        });

    } catch (error) {
        console.log("Error", error);
    }

}
orderDetails();