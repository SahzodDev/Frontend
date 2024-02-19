


const API_BASE_URL = "https://65cf3fa5bdb50d5e5f5ad7f7.mockapi.io/api/v1/"

/*
const test = fetch(`${API_BASE_URL}/products`)
.then( (response)=>{
    console.log(response);

    /// response objesinin json metodu promise objesi döndürür
    return response.json();
} )
.then( (data) => {console.log(data[0].id)})
.catch( (err)=>{console.log(err)});
*/

fetch(`${API_BASE_URL}/products`)
.then( (response)=>{
    console.log(response);
    if (response.ok){
        return response.json();
    }

    throw new Error("Smt went wrong");
} )
.then((data)=>{console.log(data)})
.catch( (err)=> {console.log(err)});

// ${API_BASE_URL}/products/1

fetch(`${API_BASE_URL}/products/1`, {method: "GET"})
.then( (response)=>{
    if(response.ok){
        return response.json();
    }

    throw new Error("Smt went wrong...");
})
.then( (data)=>{console.log(data)})
.catch( ()=>{})