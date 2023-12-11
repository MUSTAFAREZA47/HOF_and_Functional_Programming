document.addEventListener('DOMContentLoaded', function() {
    const reverseBtn = document.getElementById('reverseBtn');
    const output = document.getElementById('output');
  
    reverseBtn.addEventListener('click', function() {
      const inputString = document.getElementById('inputString').value;
      output.textContent = '';
  
      let count = 2;
      const countdown = setInterval(() => {
        output.textContent = `Reversing in ${count} seconds...`;
        count--;
        if (count < 0) {
          clearInterval(countdown);
          const reversedString = inputString.split('').reverse().join('');
          output.textContent = `Reversed string after 2 seconds: ${reversedString}`;
        }
      }, 1000);
    });
  });
  