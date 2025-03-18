Pokemon App

(User Stories) As A User...

Note: I like to follow the structure of building the route -> controller -> view

1. AAU, I want to be able to search a pokemon and see the pokemon that I searched
    1. Change test/hello page to a home page, and add search form on index.ejs (DONE)
    2. Define the route: POST /searchPokemon 
    3. Define the controller: function searchPokemon(req, res) {}
    4. Define the view: pokemonResults.ejs
2. AAU, I want to be able to save a pokemon to my party
    1. Create a button in pokemonResults.ejs to save a pokemon in party, and the button will submit a form when clicked that contains the pokemon data as hidden fields. The form will create POST HTTP request to /savePokemon.
    2. Create a route in our router to handle a POST request for /savePokemon.
    3. Create a controller called savePokemon(req, res) {} that will handle the request at /savePokemon.
    4. In the controller, we will take the form data from the request body and push the data into our pokemonParty array.
    5. At the end of the controller, we will re-render the homepage (a.la the search page)
3. AAU, I want to be able to see a list of all the pokemons in my party
    1. Create a route in our router to handle a GET request for /pokemonParty.
    2. Create a controller called getPokemonParty(req, res) {} that will handle the request at /pokemonParty.
    3. In the controller, we will retrieve the pokemonParty array and pass it to the view.
    4. Define the view: pokemonParty.ejs to display the list of pokemons in the party.
4. AAU, I want to be able to delete/remove a pokemon from my party
    1. Create a button in pokemonParty.ejs to remove a pokemon from the party, and the button will submit a form when clicked that contains the pokemon data as hidden fields. The form will create POST HTTP request to /removePokemon.
    2. Create a route in our router to handle a POST request for /removePokemon.
    3. Create a controller called removePokemon(req, res) {} that will handle the request at /removePokemon.
    4. In the controller, we will take the form data from the request body and remove the corresponding pokemon from our pokemonParty array.
    5. At the end of the controller, we will re-render the pokemonParty view to reflect the changes.