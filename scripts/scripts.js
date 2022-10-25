const cocktailListEl = document.getElementById('cocktail-list');
const formEl = document.querySelector('.selection__form');

// BY COCKTAIL NAME
// const apiPromise = axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')

let cocktailObj = {
  title: '',
  src: '',
  id: '',
  ingredients: [],
  measurements: [],
  instructions: '',
};

// BY INGREDIENT NAME
const promiseCall = ingredientFilter => {
  const apiPromise = axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientFilter}`
  );
  apiPromise.then(response => {
    randomNumber = randomCocktail(response.data.drinks.length);
    let newCocktail = response.data.drinks[randomNumber];
    // cocktailObjArray.push(response.data.drinks[0]);
    // console.log(cocktailObjArray);
    cocktailObj.title = newCocktail.strDrink;
    cocktailObj.id = newCocktail.idDrink;
    cocktailObj.src = newCocktail.strDrinkThumb;

    renderCocktail(cocktailObj);
  });
};

// let array = ['hello', 'hi', 1, '4', 10];

function randomCocktail(arrayLength) {
  // console.log(array.length);

  let randomNumber = Math.floor(Math.random() * arrayLength);
  // console.log(randomNumber);

  return randomNumber;
}

const renderCocktail = cocktailObj => {
  const cocktailTitleEl = document.querySelector('.result__title');
  const cocktailImgEl = document.querySelector('.result__img');

  cocktailTitleEl.innerText = cocktailObj.title;
  cocktailImgEl.setAttribute('src', cocktailObj.src);

  console.log(cocktailObj);
  console.log('render cocktail was run');
  // title
  console.log(cocktailObj.title);
  // id
  console.log(cocktailObj.id);
  // ingredients
  // instructions

  ingredientsPromiseCall(cocktailObj.id);
};

formEl.addEventListener('submit', e => {
  e.preventDefault();

  // cocktailObj = {};

  console.log(e.target.Alcohol.value);
  let ingredientFilter = e.target.Alcohol.value;
  console.log(ingredientFilter);
  promiseCall(ingredientFilter);
});

/* PSEUDO CODE */
// Check what user Selects
// event listener on the submit
// tie each option to a specific variable
// upon submit, it changes the ingredient variable
// then creates the promise

const ingredientsPromiseCall = drinkId => {
  const ingredientsPromise = axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
  );
  console.log(ingredientsPromise);
  ingredientsPromise.then(response => {
    // console.log(response.data.drinks[0].strInstructions);

    let cocktail = response.data.drinks[0];
    const ingredientsUlEl = document.querySelector('.recipe__ingredients');
    const measurementsUlEl = document.querySelector('.recipe__measurements');

    const instructionsEl = document.querySelector('.recipe__instructions');

    cocktailObj.instructions = cocktail.strInstructions;

    // Ingredients
    cocktailObj.ingredients.push(cocktail.strIngredient1);
    cocktailObj.ingredients.push(cocktail.strIngredient2);
    cocktailObj.ingredients.push(cocktail.strIngredient3);
    cocktailObj.ingredients.push(cocktail.strIngredient4);

    // Measurements
    cocktailObj.measurements.push(cocktail.strMeasure1);
    cocktailObj.measurements.push(cocktail.strMeasure2);
    cocktailObj.measurements.push(cocktail.strMeasure3);

    console.log(
      cocktailObj.ingredients,
      cocktailObj.measurements,
      cocktailObj.instructions
    );

    cocktailObj.ingredients.forEach(item => {
      const ingredient = document.createElement('li');
      ingredient.classList.add('recipe__ingredient-item');
      ingredient.innerText = item;
      ingredientsUlEl.innerHTML = '';
      ingredientsUlEl.appendChild(ingredient);
    });

    cocktailObj.measurements.forEach(item => {
      const measurementSpan = document.createElement('li');
      measurementSpan.classList.add('recipe__measurement-item');

      measurementSpan.innerText = item;
      measurementsUlEl.appendChild(measurementSpan);
    });

    instructionsEl.innerText = cocktailObj.instructions;
  });
};

// All ingredients
// strIngredient1 strIngredient2 strIngredient3

// Measurements for each alcoholic ingredient
// strMeasure1 strMeasure2 strMeasure3 etc

// Instructions
// strInstructions

////// EXTRAS

// Cocktail glass
// strGlass

// is alcoholic
// strAlcoholic
