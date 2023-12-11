document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convertBtn');
    const output = document.getElementById('output');
  
    convertBtn.addEventListener('click', function() {
      const itemsInput = document.getElementById('items').value.trim();
      if (!itemsInput) {
        output.textContent = 'Please enter items and their prices in USD.';
        return;
      }
  
      const itemsArray = itemsInput.split(',').map(item => item.trim());
      const itemsObject = {};
  
      itemsArray.forEach(item => {
        const [itemName, itemPrice] = item.split(':').map(entry => entry.trim());
        itemsObject[itemName] = parseFloat(itemPrice);
      });
  
      const exchangeRate = 80;
      const convertedItems = Object.keys(itemsObject).map(item => ({
        [item]: itemsObject[item] * exchangeRate
      }));
  
      output.innerHTML = '<strong>Converted prices in INR:</strong><br>';
      convertedItems.forEach(convertedItem => {
        const itemName = Object.keys(convertedItem)[0];
        const itemPrice = convertedItem[itemName];
        output.innerHTML += `${itemName}: ${itemPrice} INR<br>`;
      });
    });
  });
  