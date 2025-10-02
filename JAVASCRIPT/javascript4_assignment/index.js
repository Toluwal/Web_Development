// Practice Exercise 1

// 1. Create a movie object
let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    rating: 9,
    isWatched: false,

    // 2. Method to get summary
    getSummary: function () {
        return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
};

// 3. Update isWatched property
movie.isWatched = true;

console.log(movie.getSummary()); // "Inception (2010), directed by Christopher Nolan, rated 9/10"
console.log("Watched:", movie.isWatched);


// Challenge: Movie Collection

let movies = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        releaseYear: 2010,
        rating: 9,
        isWatched: true,
        getSummary: function () {
            return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
        }
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        releaseYear: 2014,
        rating: 8.6,
        isWatched: false,
        getSummary: function () {
            return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
        }
    },
    {
        title: "Tenet",
        director: "Christopher Nolan",
        releaseYear: 2020,
        rating: 7.5,
        isWatched: false,
        getSummary: function () {
            return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
        }
    }
];

// Function to display movies with rating ≥ 8
function displayTopMovies(movies) {
    console.log("\nMovies with Rating ≥ 8:");
    for (let movie of movies) {
        if (movie.rating >= 8) {
            console.log(movie.getSummary());
        }
    }
}

// Run the challenge
displayTopMovies(movies);

// Practice Exercise 2

// 1. Create a cart item object
let cartItem = {
    name: "Laptop",
    price: 1200,
    quantity: 2,

    // 2. Method to calculate total for this item
    getTotal: function () {
        return this.price * this.quantity;
    }
};

console.log(`${cartItem.name} total: $${cartItem.getTotal()}`);


// 3. Create an array with at least 3 cart items
let cart = [
    {
        name: "Laptop",
        price: 1200,
        quantity: 2,
        getTotal: function () {
            return this.price * this.quantity;
        }
    },
    {
        name: "Headphones",
        price: 150,
        quantity: 3,
        getTotal: function () {
            return this.price * this.quantity;
        }
    },
    {
        name: "Mouse",
        price: 50,
        quantity: 4,
        getTotal: function () {
            return this.price * this.quantity;
        }
    }
];


// 4. Function to calculate total cost of all cart items
function getCartTotal(cart) {
    let total = 0;
    for (let item of cart) {
        total += item.getTotal();
    }
    return total;
}



console.log("\ Shopping Cart:");
for (let item of cart) {
    console.log(`${item.name} (x${item.quantity}) - $${item.getTotal()}`);
}
console.log(`\n Cart Total: $${getCartTotal(cart)}`);

// Practice Exercise 3

// 1. Create a member object
let member = {
    name: "Alice Johnson",
    membershipType: "premium", // can be "basic" or "premium"
    borrowedBooks: [],

    // 2. Method to borrow a book
    borrowBook: function (book) {
        this.borrowedBooks.push(book);
        console.log(`${this.name} borrowed "${book}".`);
    },

    // 3. Method to get borrowed count
    getBorrowedCount: function () {
        return this.borrowedBooks.length;
    },

    // 4. Method to get membership info
    getMembershipInfo: function () {
        if (this.membershipType === "premium") {
            return `${this.name} has a Premium membership: unlimited borrowing privileges.`;
        } else if (this.membershipType === "basic") {
            return `${this.name} has a Basic membership: limited borrowing (up to 3 books).`;
        } else {
            return `${this.name} has an Unknown membership type.`;
        }
    }
};


// Borrow books
member.borrowBook("The Great Gatsby");
member.borrowBook("1984");
member.borrowBook("To Kill a Mockingbird");

// Get info
console.log(`\n Borrowed Books: ${member.borrowBook(borrowedBooks)}`);
console.log(` Total Borrowed: ${member.getBorrowedCount()}`);
console.log(` Membership Info: ${member.getMembershipInfo()}`);


// Practice Exercise Setup

// Simple Library System


// 1. Array of book objects
let library = [
    { title: "1984", author: "George Orwell", pages: 328, available: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, available: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, available: true },
    { title: "Moby Dick", author: "Herman Melville", pages: 635, available: true }
];

// 2. Borrowing (checkout) function
function borrowBook(title) {
    for (let book of library) {
        if (book.title.toLowerCase() === title.toLowerCase()) {
            if (book.available) {
                book.available = false;
                console.log(`You borrowed "${book.title}"`);
                return;
            } else {
                console.log(`Sorry, "${book.title}" is already borrowed.`);
                return;
            }
        }
    }
    console.log(`Book titled "${title}" not found in the library.`);
}

// 3. Returning function
function returnBook(title) {
    for (let book of library) {
        if (book.title.toLowerCase() === title.toLowerCase()) {
            if (!book.available) {
                book.available = true;
                console.log(`You returned "${book.title}"`);
                return;
            } else {
                console.log(`"${book.title}" was not borrowed.`);
                return;
            }
        }
    }
    console.log(`Book titled "${title}" not found in the library.`);
}

// 4. Search by author
function searchByAuthor(author) {
    console.log(`\nBooks by ${author}:`);
    let found = false;
    for (let book of library) {
        if (book.author.toLowerCase() === author.toLowerCase()) {
            console.log(`- ${book.title} (${book.pages} pages)`);
            found = true;
        }
    }
    if (!found) console.log("No books found by this author.");
}

// 5. Display all books with status
function displayBooks() {
    console.log("\nLibrary Collection:");
    console.log("-----------------------------------");
    for (let book of library) {
        let status = book.available ? "Available" : "Borrowed";
        console.log(`${book.title} by ${book.author} - ${book.pages} pages - ${status}`);
    }
    console.log("-----------------------------------\n");
}


displayBooks();

borrowBook("1984");
borrowBook("The Great Gatsby");
borrowBook("The Great Gatsby");

displayBooks();

returnBook("1984");
returnBook("Moby Dick");

displayBooks();

searchByAuthor("George Orwell");
searchByAuthor("J.K. Rowling");

