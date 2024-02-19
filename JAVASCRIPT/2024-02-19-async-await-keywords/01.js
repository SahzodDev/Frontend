


const MOCK_API_BASE = "https://65cf3fa5bdb50d5e5f5ad7f7.mockapi.io";

async function testing() {
    // asenkron fonksiyonlar içerisinde await keyword'ü kullanrak asenkron işlemlerde satırı bekletebilirsiniz.
    return 3;
}

// her async function bir promise objesi döndürür.
console.log(testing()); // Promise object loglanır.


async function getTodos() {

    try {

        const response = await fetch(`${MOCK_API_BASE}/todos`);
        if(!response.ok){
            throw new Error("Ters giden bir şeyler var...");
        }
        const data = await response.json();

        return data;

    }catch(err) {
        console.log(err);
    }

    
}

/*
getTodos()
.then()
*/