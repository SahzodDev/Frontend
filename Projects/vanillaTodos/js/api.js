const API_BASE_URL = "https://65cf3fa5bdb50d5e5f5ad7f7.mockapi.io";


function getTodos() {
    
    return fetch ( `${API_BASE_URL}/todos` )
    .then( (response)=>{
        if (!response.ok) {
            throw new Error("Something went wrong...")
        }

        return response.json();
    } )
    .then( (data)=>{return data} )
    .catch( (err)=>{console.log(err)} )
}

async function addTodo(todoObj) {
    
    const fetchOptions = { 
        method:"POST", 
        headers: {"Content-type":"application/json"},
        body: JSON.stringify( {name:Math.random() + "işini yap"})
}

    const response = await fetch(`${API_BASE_URL}/todos`, fetchOptions);

    if(!response.ok){
        throw new Error("Ters giden bir şeyler");
    }
    

    return response;

}

function deleteTodo(id) {

    const fetchOptions = { method: "DELETE"}

    return fetch ( `${API_BASE_URL}/todos/${id}`, fetchOptions )
    .then( (response)=>{
        if (!response.ok) {
            throw new Error("Something went wrong...")
        }

        return response;
    } )
    .catch( (err)=>{console.log(err)} )
}

function editTodo(id, updatedTodoData) {
    
}