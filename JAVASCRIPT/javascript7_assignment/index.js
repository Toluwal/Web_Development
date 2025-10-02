
// Practice Exercise 1
// 1. Define the Book class
    class Book {
      constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isBorrowed = false; // default
      }

      // Method to get summary
      getSummary() {
        return `Book: "${this.title}" by ${this.author} (${this.year})`;
      }

      // Method to borrow book
      borrowBook() {
        if (!this.isBorrowed) {
          this.isBorrowed = true;
          return `${this.title} has been borrowed.`;
        } else {
          return `${this.title} is already borrowed.`;
        }
      }
    }

    // 2. Create some Book objects
    const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
    const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

    // 3. Call methods and show results
    let outputText = "";
    outputText += book1.getSummary() + "\n";
    outputText += book2.getSummary() + "\n\n";

    // Borrowing books
    outputText += book1.borrowBook() + "\n";
    outputText += book1.borrowBook() + "\n"; // try borrowing again
    outputText += book2.borrowBook() + "\n";

    // Show on page
    document.getElementById("output").textContent = outputText;


    // Practice Exercise 2

        // 1. Define the Student class
    class Student {
      constructor(name, age, grades) {
        this.name = name;
        this.age = age;
        this.grades = grades; // array of numbers
      }

      // 2. Calculate average grade
      calculateAverage() {
        let sum = 0;
        for (let grade of this.grades) {
          sum += grade;
        }
        return (sum / this.grades.length).toFixed(2); // 2 decimal places
      }

      // 3. Get student details
      getDetails() {
        const avg = this.calculateAverage();
        const status = avg < 50 ? " Failed" : " Passed";
        return `Name: ${this.name}, Age: ${this.age}, Average: ${avg} → ${status}`;
      }
    }

    // Create some Student objects
    const student1 = new Student("Alice", 16, [80, 70, 90]);
    const student2 = new Student("Bob", 17, [40, 35, 50]);

    // Show results
    let output2Text = "";
    output2Text += student1.getDetails() + "\n";
    output2Text += student2.getDetails() + "\n";

    document.getElementById("output2").textContent = output2Text;

    // Practice Exercise 3

    // 1. Base class Vehicle
    class Vehicle {
      constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
      }

      // Method to get vehicle info
      getInfo() {
        return `Vehicle: ${this.brand} ${this.model} (${this.year})`;
      }

      // Challenge: Check if vehicle is old
      isOld() {
        const currentYear = new Date().getFullYear();
        return (currentYear - this.year) > 10;
      }
    }

    // 2. Car class extending Vehicle
    class Car extends Vehicle {
      constructor(brand, model, year, fuelType) {
        super(brand, model, year); // call parent constructor
        this.fuelType = fuelType;
      }

      // Override getInfo to include fuelType
      getInfo() {
        return `Car: ${this.brand} ${this.model} (${this.year}), Fuel: ${this.fuelType}`;
      }
    }

    // Create objects
    const vehicle1 = new Vehicle("Toyota", "Corolla", 2005);
    const car1 = new Car("Tesla", "Model 3", 2021, "Electric");
    const car2 = new Car("Honda", "Civic", 2010, "Petrol");

    // Display results
    let output3 = "";
    output3 += vehicle1.getInfo() + ` : Old? ${vehicle1.isOld()}\n`;
    output3 += car1.getInfo() + ` : Old? ${car1.isOld()}\n`;
    output3 += car2.getInfo() + ` : Old? ${car2.isOld()}\n`;

    document.getElementById("output3").textContent = output3;

    // Practice Exercise 4

    // 1. Product class
    class Product {
      constructor(name, price) {
        this.name = name;
        this.price = price;
      }
    }

    // 2. Cart class
    class Cart {
      constructor() {
        this.items = []; // array of {product, quantity}
      }

      // Add product with quantity
      addProduct(product, quantity) {
        this.items.push({ product, quantity });
      }

      // Remove product by name
      removeProduct(productName) {
        this.items = this.items.filter(item => item.product.name !== productName);
      }

      // Get total price
      getTotal() {
        let total = 0;
        for (let item of this.items) {
          total += item.product.price * item.quantity;
        }

        // Challenge: Free shipping if above 100
        if (total > 100) {
          return `Total: ₦${total} : Free Shipping!`;
        }
        return `Total: ₦${total}`;
      }
    }

    // --- Example Usage ---
    const cart = new Cart();

    const prod1 = new Product("Bread", 20);
    const prod2 = new Product("Milk", 50);
    const prod3 = new Product("Eggs", 40);

    cart.addProduct(prod1, 2); // 2 breads = 40
    cart.addProduct(prod2, 1); // 1 milk = 50
    cart.addProduct(prod3, 3); // 3 eggs = 120

    let output4 = "";
    output4 += "Cart Items:\n";
    for (let item of cart.items) {
      output4 += `${item.product.name} (₦${item.product.price}) * ${item.quantity}\n`;
    }
    output4 += "\n" + cart.getTotal() + "\n";

    // Remove Milk
    cart.removeProduct("Milk");
    output4 += "\nAfter removing Milk:\n";
    for (let item of cart.items) {
      output4 += `${item.product.name} (₦${item.product.price}) * ${item.quantity}\n`;
    }
    output4 += "\n" + cart.getTotal();

    document.getElementById("output4").textContent = output4;