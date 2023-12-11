document.addEventListener('DOMContentLoaded', function() {
    const validateBtn = document.getElementById('validateBtn');
    const output = document.getElementById('output');
  
    validateBtn.addEventListener('click', function() {
      const linkedinUrl = document.getElementById('linkedinUrl').value.trim();
      if (!linkedinUrl) {
        output.textContent = 'Please enter a LinkedIn Profile URL.';
        return;
      }
  
      const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
      const isValidLinkedInUrl = linkedinRegex.test(linkedinUrl);
  
      output.textContent = isValidLinkedInUrl ? 'Valid LinkedIn Profile URL!' : 'Invalid LinkedIn Profile URL!';
    });
  });
  