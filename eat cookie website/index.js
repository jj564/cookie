document.addEventListener('DOMContentLoaded', function() {
    const confirmButton = document.getElementById('confirm-button');
    const cookieInput = document.getElementById('cookies-input');
    const cookieGifContainer = document.getElementById('cookie-gif-container');
    const cookieGif = document.querySelector('.cookie-gif');
    const calorieCountDisplay = document.getElementById('calorie-count');
  
    confirmButton.addEventListener('click', function() {
      // Get the user input and convert it to a floating-point number
      const numberOfCookies = parseFloat(cookieInput.value);
  
      // Check if the input is a valid number
      if (!isNaN(numberOfCookies) && numberOfCookies > 0) {
        // Calculate the duration for which the GIF should run (half of the user input)
        const durationInSeconds = numberOfCookies / 2 * 1000; // Convert to milliseconds
  
        // Show the GIF container
        cookieGifContainer.style.display = 'block';
  
        // Hide any previous GIFs that were displayed
        cookieGif.style.display = 'none';
  
        // Reset the GIF animation
        cookieGif.src = cookieGif.src; // This reloads the GIF, restarting the animation
  
        // Display the GIF
        cookieGif.style.display = 'block';
  
        // Set a timer to stop the GIF after the calculated duration
        setTimeout(function() {
          // Hide the GIF container
          cookieGifContainer.style.display = 'none';
          
          // Calculate the calorie count
          const calorieCount = numberOfCookies * 488;
  
          // Display the calorie count
          calorieCountDisplay.textContent = `Calories: ${calorieCount}`;
          calorieCountDisplay.style.display = 'block';
        }, durationInSeconds);
      } else {
        alert('Please enter a valid number of cookies.');
      }
    });
  });
  