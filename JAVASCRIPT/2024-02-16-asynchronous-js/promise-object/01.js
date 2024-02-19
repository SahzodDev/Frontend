



const isRainy = false;

const iWillBeThereInAnHour = new Promise( (resolve, reject) => {
    if (!isRainy) {
        resolve("her zaman dakik bir insanımdır...");
    } else {
        reject("Yağmurun azizliğine uğradım...");
    }
} );


iWillBeThereInAnHour.then( 
    
    // resolve durumunda çağrılacak
    (message) => {
    console.log(message);
    },

    // reject durmunda çağrılacak
    (message) => {
        console.log(message);
    }

);



iWillBeThereInAnHour.then( 
    
    // resolve durumunda çağrılacak
    (message) => {
    console.log(message);
    },
)
    
.catch( (message) => {console.log(message)}) // reject ve promise sırasında oluşan hata neticesinde çalışır.
;


const iWillReadTheFile = new Promise( (resolve, reject) => {
    // resolve("File has been read.");

    /*
    setTimeout( () => {
        reject("File has been read");
    }, 5000);
    */

    reject("There was an error reading the file");
} );

console.log("xx");

// RETURNING A PROMISED OBJECT

function readFile(url) {
    // read the file from the system
    const ok = true;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    return new Promise( (resolve, reject)=>{

        setTimeout( ()=> {
            if (ok){
                resolve("File has been read");
            }
    
            reject("There was an error");
        }, 3000 )
        });   
}

readFile("people.txt").then( (result)=> {
    console.log(result);
} )
.catch( (err) => {console.log(err)});




