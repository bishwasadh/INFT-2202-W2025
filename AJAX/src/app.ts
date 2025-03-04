
let hello: string = "Hello ji";
console.log(hello);

let x: number = 1;
// Choice 1: Make the code wait until the async code is executed an a value is returned before proceeding to the next line oof code
// Async/Await

// try {
//     let pokemon: any = await getPokemonDatabase();

//     console.log("Line 10 ran");
//     console.log(pokemon);
// } catch (error) {
//     console.log("Error occured");
//     console.log(error);
// }

// Choice 2: Make the async code run in the background and continue with the rest of the code as usual

let pokemon = getPokemonDatabase()
.then((dataFromPromise: any) => {
    // Do with data what you need
    let arrayData = dataFromPromise.split("");
    return arrayData;
}
)
then ((arrayData: string) => {
    console.log(arrayData);
}
)


console.log("Line 32 ran!!!!!!!!");


async function getPokemonDatabase(): any {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("timer expired!")
            // resolve ("Pikachu")
            reject({error: 400, message: "Malware detected"});
            resolve("Pikachu")
        }
        , 5000);

    })
}


//_______________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________

const pokemonQuery = "pikachu"

let API_URL = " https://pokeapi.co/api/v2/pokemon/"

//Async/Await
let response = await fetch(API_URL + pokemonQuery)
console.log(response.json);