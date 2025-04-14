function notBad(sentence) {
    const notIndex = sentence.indexOf("not");
    const badIndex = sentence.indexOf("bad");
  
    // If 'not' comes before 'bad', replace from 'not' to 'bad' with 'good'
    if (notIndex !== -1 && badIndex !== -1 && badIndex > notIndex) {
      const beforeNot = sentence.substring(0, notIndex);
      const afterBad = sentence.substring(badIndex + 3);
      return beforeNot + "good" + afterBad;
    }
  
    // If condition not met, return original sentence
    return sentence;
  }
  
  function showResult() {
    const input = document.getElementById("sentenceInput").value.trim();
    const result = notBad(input);
    document.getElementById("output").innerText = "Result: " + result;
  }
  