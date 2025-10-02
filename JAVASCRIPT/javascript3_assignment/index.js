// Practice Exercise 1

let shoppingList = ["Pen", "Pencil", "Eraser", "Mathset", "Ruler"];
console.log("Original shopping list:", shoppingList)

shoppingList.push("Ballpen");
console.log("updatedShoppingList: ", shoppingList);

let firstItem = shoppingList.shift();
console.log("Removed item: ", firstItem);
console.log("Remaining Items: ", shoppingList);

console.log("No of items:", (shoppingList.length));

for (let i = 0; i < shoppingList.length; i++) {
    console.log(`Shopping List ${i + 1}: ${shoppingList[i]}`)
}
// Challenge
totalList = []
for (let i = 1; 1 < shoppingList; i++) {
    console.log(`${i} : ${shoppingList[i]}}`)
}

// Practice Exercise 2 student grades analyzer

let grades = [60, 67, 73, 87, 93, 56, 88, 95]
        function getAverage(grades) {
            let total = 0;
            for (let grade of grades) {
                total += grade;
            }
            return total / grades.length;
        }
        console.log("Average grade:", getAverage(grades).toFixed(2));

        function getHighest(grades) {
            let highest = grades[0];
            for (let grade of grades) {
                if (grade > highest) {
                    highest = grade;
                }
            }
            return highest;
        }
        console.log("Highest grade:", getHighest(grades));

        function getLowest(grades) {
            let lowest = grades[0];
            for (let grade of grades) {
                if (grade < lowest) {
                    lowest = grade;
                }
            }
            return lowest;
        }
        console.log("Lowest grade:", getLowest(grades));

        function getPassRate(grades) {
            for (let passRate = 0; passRate >= grades[50]; passRate += 1);
            let passRate = grades[50];
            for (let grade of grades) {
                if (grade > passRate) {
                    passRate = count(grade)
                }
            }
            return passRate;
        }
        console.log("No of passed student:", getPassRate(grades));


        let movies = ["a", "b", "c", "d", "e"];
        let ratings = [3, 4, 5, 2, 1];
        function getAverageRating(ratings) {
            let total = 0;
            for (let rating of ratings) {
                total += rating;
            }
            return total / ratings.length;
        }

        console.log("Average rating:", getAverageRating(ratings).toFixed(2));


        function getTopMovie(movies, ratings) {
            let topMovie = ratings[0];
            for (let rating of ratings) {
                if (rating > ratings) {
                    topMovie = rating;
                }
            }
            return topMovie;
        }
        console.log("Highest rated Movie:", getTopMovie(topMovie));

        function addStudent(names, grades) {
            let name =["Ade", "Tolu", "Tola", "Makinde", "Ore-ofe"];
            let grade = [70, 55, 83, 67, 72];
        }

        function calculateAverage(grades){
            let total = 0;
            for (let grade of grades) {
                console.log("Adding grade:", grade);
                total += grade

            }

            
        }

        let average = total/console.log(calculateAverage(grades.length));