const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
const cocktailList = document.getElementById("cocktail-list");

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const cocktails = data.drinks;
    cocktails.forEach(cocktail => {
      const cocktailEl = document.createElement("div");
      cocktailEl.classList.add("cocktail");

      const cocktailImg = document.createElement("img");
      cocktailImg.src = cocktail.strDrinkThumb;
      cocktailImg.alt = cocktail.strDrink;
      cocktailEl.appendChild(cocktailImg);

      const cocktailName = document.createElement("h2");
      cocktailName.innerText = cocktail.strDrink;
      cocktailEl.appendChild(cocktailName);

      const cocktailInstructions = document.createElement("p");
      cocktailInstructions.innerText = cocktail.strInstructions;
      cocktailEl.appendChild(cocktailInstructions);

      cocktailList.appendChild(cocktailEl);
    });
  })
  .catch(error => {
    console.log(error);
  });
