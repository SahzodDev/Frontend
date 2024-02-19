
// Data güncellemek

const API_BASE_URL = "https://65cf3fa5bdb50d5e5f5ad7f7.mockapi.io/api/v1/"

const fetchOptions = {
    method: "DELETE",
    
    
}

fetch(`${API_BASE_URL}/products/1`, fetchOptions)
.then((response)=>{console.log(response)})
.catch((err)=>{console.log(err);});