const searchFood = () =>{
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value;
  searchField.value='';

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayResult(data.meals))
}
const displayResult = meals =>{
  const displayResult = document.getElementById('display-result')
  displayResult.textContent='';
  for(const meal of meals){
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML=`
    <div onclick="displayByClick(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    `
    displayResult.appendChild(div)
    // console.log(meal)
  }
}

const displayByClick = mealId =>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
  .then(res => res.json())
  .then(data => ultemateResult(data.meals[0]))
}

const ultemateResult = meal =>{
const finelResult = document.getElementById('finel-result')
finelResult.textContent='';
const div = document.createElement('div')
div.classList.add('card')
div.innerHTML=`
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
`
finelResult.appendChild(div)
}


