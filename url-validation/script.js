document.addEventListener('DOMContentLoaded', function() {
    const validateBtn = document.getElementById('validateBtn');
    const output = document.getElementById('output');
  
    validateBtn.addEventListener('click', function() {
      const urlInput = document.getElementById('url').value.trim();
      if (!urlInput) {
        output.textContent = 'Please enter a URL.';
        return;
      }
  
      const urlRegex = /^(http[s]?:\/\/)[\w.-]+(\.[\w]+)+$/;
      const isValidURL = urlRegex.test(urlInput);
  
      output.textContent = isValidURL ? 'Valid URL!' : 'Invalid URL!';
    });
  });
  