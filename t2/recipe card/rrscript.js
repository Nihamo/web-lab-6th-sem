const recipe = {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
  };
  
  // Logging each part separately in the console
  console.log(recipe.title);
  console.log("Serves: " + recipe.servings);
  console.log("Ingredients:");
  recipe.ingredients.forEach(ingredient => console.log(ingredient));
  
  // Also displaying on the web page
  const display = document.getElementById("recipeDisplay");
  let output = `${recipe.title}\nServes: ${recipe.servings}\nIngredients:\n`;
  
  recipe.ingredients.forEach(ingredient => {
    output += `- ${ingredient}\n`;
  });
  
  display.textContent = output;
  