
    // Function to generate a random color
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    // Function to change text and background colors
    function changeColor() {
      var para = document.getElementById("text");

      // Change text color
      para.style.color = getRandomColor();

      // Challenge: also change background color
      document.body.style.backgroundColor = getRandomColor();
    }
 

    // Practice Exercise 2

    // Function to update count
    function updateCount() {
      var text = document.getElementById("textInput").value;

      // Character count
      var charCount = text.length;

      // Word count (ignore extra spaces)
      var wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

      // Update display
      var counter = document.getElementById("counter");
      counter.textContent = "Characters: " + charCount + " | Words: " + wordCount;

      // Challenge: Highlight red if >200 chars
      if (charCount > 200) {
        counter.classList.add("limit-exceeded");
      } else {
        counter.classList.remove("limit-exceeded");
      }
    }


    // Practice Exercise 3

     // Handle form submit
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // 4. Prevent page refresh

      // Get values
      var username = document.getElementById("username").value.trim();
      var password = document.getElementById("password").value.trim();
      var message = document.getElementById("message");

      // 3. Check conditions
      if (username === "" || password === "") {
        message.textContent = "Please fill in all fields";
        message.style.color = "red";
      } else if (username === "admin" && password === "1234") {
        // Challenge: Admin login
        message.textContent = "Admin login successful";
        message.style.color = "green";
      } else {
        message.textContent = "Welcome, " + username + "!";
        message.style.color = "blue";
      }
    });
