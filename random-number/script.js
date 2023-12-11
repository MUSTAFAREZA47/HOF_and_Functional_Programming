document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const output = document.getElementById('output');
  
    generateBtn.addEventListener('click', function() {
      output.textContent = 'Generating random number...';
  
      let count = 3;
      const countdown = setInterval(() => {
        output.textContent = `Generating random number in ${count} seconds...`;
        count--;
        if (count < 0) {
          clearInterval(countdown);
          const randomNumber = Math.floor(Math.random() * 100) + 1;
          output.textContent = `Random number generated: ${randomNumber}`;
        }
      }, 1000);
    });
  });
  