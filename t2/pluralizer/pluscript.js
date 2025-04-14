function pluralize(noun, number) {
    const irregularPlurals = {
      goose: "geese",
      tooth: "teeth",
      foot: "feet",
      mouse: "mice",
      person: "people",
      child: "children",
      man: "men",
      woman: "women",
      sheep: "sheep",
      deer: "deer",
      fish: "fish",
      ox: "oxen"
    };
  
    noun = noun.toLowerCase();
    let pluralForm;
  
    if (number === 1) {
      pluralForm = noun;
    } else if (irregularPlurals[noun]) {
      pluralForm = irregularPlurals[noun];
    } else if (noun.endsWith("y") && !/[aeiou]y$/.test(noun)) {
      pluralForm = noun.slice(0, -1) + "ies"; // party → parties
    } else if (noun.endsWith("s") || noun.endsWith("x") || noun.endsWith("z") || noun.endsWith("ch") || noun.endsWith("sh")) {
      pluralForm = noun + "es"; // box → boxes
    } else {
      pluralForm = noun + "s"; // cat → cats
    }
  
    return `${number} ${pluralForm}`;
  }
  
  function pluralizeWord() {
    const nounInput = document.getElementById("noun").value.trim();
    const numberInput = parseInt(document.getElementById("number").value);
    const output = document.getElementById("output");
  
    if (!nounInput || isNaN(numberInput)) {
      output.innerText = "Please enter both a noun and a valid number.";
      return;
    }
  
    const result = pluralize(nounInput, numberInput);
    output.innerText = result;
  }
  