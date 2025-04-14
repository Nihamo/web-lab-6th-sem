function fixStart(str) {
    const firstChar = str[0];
    let result = firstChar;
  
    for (let i = 1; i < str.length; i++) {
      if (str[i] === firstChar) {
        result += '*';
      } else {
        result += str[i];
      }
    }
  
    return result;
  }
  
  function applyFixStart() {
    const input = document.getElementById('inputString').value;
    
    if (input.length === 0) {
      document.getElementById('result').textContent = 'Please enter a word.';
      return;
    }
  
    const output = fixStart(input);
    document.getElementById('result').textContent = `Result: ${output}`;
  }
  