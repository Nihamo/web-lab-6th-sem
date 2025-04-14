const choices = ["Blue", "Green", "Red", "Purple", "Black"];

function getOrdinal(n) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

const list = document.getElementById("choiceList");

choices.forEach((choice, index) => {
  const rank = index + 1;
  const listItem = document.createElement("li");
  listItem.textContent = `My ${getOrdinal(rank)} choice is ${choice}.`;
  list.appendChild(listItem);
});
