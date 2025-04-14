function verbing(word) {
    if (word.length < 3) {
      return word;
    } else if (word.endsWith("ing")) {
      return word + "ly";
    } else {
      return word + "ing";
    }
  }
  
  function showResult() {
    const input = document.getElementById("wordInput").value.trim();
    if (input === "") {
      document.getElementById("output").innerText = "Please enter a word.";
      return;
    }
    const result = verbing(input);
    document.getElementById("output").innerText = "Result: " + result;
  }
  