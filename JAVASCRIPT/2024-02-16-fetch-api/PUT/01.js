
// Data güncellemek

const API_BASE_URL = "https://65cf3fa5bdb50d5e5f5ad7f7.mockapi.io/api/v1/"

const fetchOptions = {
    method: "PUT",
    headers: {"Content-type":"application/json"},
    body: JSON.stringify({name:"Food Unknown"})
}

fetch(`${API_BASE_URL}/products/15`, fetchOptions)
.then((response)=>{console.log(response)})
.catch((err)=>{console.log(err);});