// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
   buttons: [
     "slideShow",
     "thumbs",
     "zoom",
     "fullScreen",
     "close"
   ],
   loop: true,
   protect: true
 });










    // Set the date we're counting down to
    const countDownDate = new Date("January 14, 2027 00:00:00").getTime();

    // Update the countdown every 1 second
    const x = setInterval(function() {

      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the remaining time
      const distance = countDownDate - now;

      // Calculaten years, months, weeks, days, hours, minutes, and seconds
      const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
      const weeks = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24 * 7));
      const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById("countdown").innerHTML = `
      
      <div class ="ind">
        <h4>years</h4>
      
          <div class = "num">
            <h2>${years}</h2>
            </div>
      </div>
        <div class ="ind">
          <h4>months</h4>
      
          <div class = "num">
            <h2>${months}</h2>
            </div>
        </div>
        <div class ="ind">
          <h4>weeks</h4>
      
          <div class = "num">
            <h2>${weeks}</h2>
            </div>
        </div>
        <div class ="ind">
          <h4>days</h4>
      
          <div class = "num">
            <h2>${days}</h2>
            </div>
        </div>
        <div class ="ind">
          <h4>hours</h4>
      
          <div class = "num">
            <h2>${hours}</h2>
            </div>
        </div>
        <div class ="ind">
          <h4>mintues</h4>
      
          <div class = "num">
            <h2>${minutes}</h2>
            </div>
        </div>
        <div class ="ind">
          <h4>seconds</h4>
      
          <div class = "num">
            <h2>${seconds}</h2>
            </div>
        </div>
      
      `;

      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);