const API_BASE_URL = "https://65cf400dbdb50d5e5f5ad8de.mockapi.io";




const btnEl = document.querySelector(".list");
btnEl.addEventListener("click", handleList);
const ulEl = document.querySelector("#list");
const formEl = document.getElementById("frmAddTodo");
formEl.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(e){
    e.preventDefault();
    const data = new FormData(formEl);
    const header = data.get("header");
    const description = data.get("description");
    handleEkle(header,description);
    //console.log(data.get("header"));
    console.log(data);
}

function handleList(){
    ulEl.innerHTML= "";
    let liElements = ulEl.getElementsByTagName("li");
    // for (let i = 0; i < liElements.length; i++) {
    //     //liElements[i].parentNode.removeChild("li");
        
    // }
    
    fetch(`${API_BASE_URL}/ToDoLIST`)
    .then((response) => {
        console.log(response);
        if (response.ok) {
            return response.json();
        }
    })
    .then((data) => {
         
        for (let i = 0; i < data.length; i++) {
            const {id, header, description} = data[i];
            const liEl = document.createElement("li");
            liEl.textContent = id + "-----" + header + "-----" + description;
            ulEl.appendChild(liEl);
        }
    })
    .catch((err) => {console.log(err);});
}

const btnEl2 = document.querySelector(".ekle");


//btnEl2.addEventListener("click", handleEkle);


const ipEl1 = document.getElementById("header");
const ipEl2 = document.getElementById("description");


function handleEkle(header, description){
    
    // const valHead = ipEl1.value;
    // const valDesc = ipEl2.value;
    const newToDo = {
         header,
         description
    };
    
    const fetchOptions = {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(newToDo)
    }

    fetch(`${API_BASE_URL}/ToDoLIST`,fetchOptions)
    .then((response) => {console.log(response);})
    .catch((err) => {console.log(err);});
}

function getToDoFormData(){
    
}

