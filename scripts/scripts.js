const cocktailListEl = document.getElementById('cocktail-list');

//  axios pull 

// BY COCKTAIL NAME
const apiPromise = axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')


// BY INGREDIENT NAME
// const apiPromise = axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
// console.log(apiPromise);

// apiPromise.then((response) => {
//     console.log(response.data);
//     response.data.drinks.forEach((item) => {
//         console.log(item.strDrink, item.idDrink, item.strDrinkThumb)


//         const cocktail = document.createElement('img');
//         cocktail.setAttribute('src', item.strDrinkThumb);
//         cocktailListEl.appendChild(cocktail);

//     })
    
// })


const ingredientsPromise = axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007');
console.log(ingredientsPromise);

ingredientsPromise.then((response) => {
    console.log(response.data);
    // response.data.ingredients.forEach(ingredient => {
    //     console.log(ingredient);
    // })
})


// Title
// All ingredients
// Instructions
// Measurements for each alcoholic ingredient
// Cocktail glass
// is alcoholic 