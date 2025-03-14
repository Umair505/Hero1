const loadCategory = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=> res.json())
    .then((data) => displayCategories(data.categories));
}
function displayCategories(categories){
    //Get the container
    //loop operations on array of object
    //create element
    const categoryContainer = document.getElementById("category-container");
    for(let cat of categories){
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `<button class="btn btn-sm">${cat.category}</button>`
        categoryContainer.append(categoryDiv);
    }
}
loadCategory();