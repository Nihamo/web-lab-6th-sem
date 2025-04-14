function squareNumber(num) {
    const result = num * num;
    const msg = `The result of squaring the number ${num} is ${result}.`;
    console.log(msg);
    return msg;
  }
  
  function halfNumber(num) {
    const result = num / 2;
    const msg = `Half of ${num} is ${result}.`;
    console.log(msg);
    return msg;
  }
  
  function percentOf(num1, num2) {
    const result = (num1 / num2) * 100;
    const msg = `${num1} is ${result}% of ${num2}.`;
    console.log(msg);
    return msg;
  }
  
  function areaOfCircle(radius) {
    const area = Math.PI * radius * radius;
    const rounded = Math.round(area * 100) / 100;
    const msg = `The area for a circle with radius ${radius} is ${rounded}.`;
    console.log(msg);
    return msg;
  }
  
  function combinedOperations(num) {
    let output = "";
  
    const half = num / 2;
    output += `Half of ${num} is ${half}.<br>`;
  
    const square = half * half;
    output += `Square of ${half} is ${square}.<br>`;
  
    const area = Math.PI * square * square;
    const roundedArea = Math.round(area * 100) / 100;
    output += `Area of circle with radius ${square} is ${roundedArea}.<br>`;
  
    const percentage = (roundedArea / square) * 100;
    output += `${roundedArea} is ${percentage.toFixed(2)}% of ${square}.`;
  
    return output;
  }
  
  function runSquare() {
    const num = parseFloat(document.getElementById("inputNumber").value);
    document.getElementById("outputArea").innerHTML = squareNumber(num);
  }
  
  function runHalf() {
    const num = parseFloat(document.getElementById("inputNumber").value);
    document.getElementById("outputArea").innerHTML = halfNumber(num);
  }
  
  function runArea() {
    const num = parseFloat(document.getElementById("inputNumber").value);
    document.getElementById("outputArea").innerHTML = areaOfCircle(num);
  }
  
  function runPercent() {
    const num1 = parseFloat(document.getElementById("inputPercent1").value);
    const num2 = parseFloat(document.getElementById("inputPercent2").value);
    document.getElementById("outputArea").innerHTML = percentOf(num1, num2);
  }
  
  function runCombined() {
    const num = parseFloat(document.getElementById("inputNumber").value);
    document.getElementById("outputArea").innerHTML = combinedOperations(num);
  }
  