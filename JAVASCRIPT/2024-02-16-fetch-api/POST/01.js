


const API_BASE_URL = "https://65cf3fa5bdb50d5e5f5ad7f7.mockapi.io/api/v1/"


const newProduct = {
    name: "laptop",
    stockCount: 10,
    description: "lorem ipsum dolor",
};

const btnAddNewProduct = document.querySelector("button");

btnAddNewProduct.addEventListener("click", handleAddNewProduct);

function handleAddNewProduct(){
    const fetchOptions = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(newProduct)
    }

    fetch(`${API_BASE_URL}/products`, fetchOptions) 
    .then((response)=>{console.log(response)})
    .catch((err)=>{console.log(err);});   
}



