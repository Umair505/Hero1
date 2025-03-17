const handleAddCart = () =>{
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const name = productName.value;
    const quantity = productQuantity.value;
    displayProduct(name, quantity);
    handleSetToLocalStorage(name, quantity);
    productName.value = "";
    productQuantity.value = "";
}   

const displayProduct = (name,quantity) => {
    const productContainer = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText = `${name} : ${quantity}`

    productContainer.appendChild(li);
}
const handleSetToLocalStorage =(productName,quantity) =>{
    console.log(productName,quantity);
}