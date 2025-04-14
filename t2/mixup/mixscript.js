function mixUp(str1, str2) {
    if (str1.length < 2 || str2.length < 2) {
      return "Both strings must be at least 2 characters long.";
    }
  
    const swapped1 = str2.slice(0, 2) + str1.slice(2);
    const swapped2 = str1.slice(0, 2) + str2.slice(2);
  
    return `${swapped1} ${swapped2}`;
  }
  
  function handleMixUp() {
    const str1 = document.getElementById('string1').value.trim();
    const str2 = document.getElementById('string2').value.trim();
    const result = mixUp(str1, str2);
    document.getElementById('result').textContent = result;
  }
  