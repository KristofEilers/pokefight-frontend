import { useState } from "react";

export default function Search({ placeholder, setQuery, pokemon }) {
  const [inputValue, setInputValue] = useState("");

  // console.log(query + " Ergebnis");

  const addQuery = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      alert("Your search field is empty!");
      // return;
    }
    setQuery(inputValue.trim());
    setInputValue("");
  };

  const getFilteredPokemons = (query, pokemon) => {
    if (!query) {
      return pokemon;
    }
    return pokemon.filter((singlePokemon) =>
      singlePokemon.name.includes(query)
    );
  };
  const filteredPokemon = getFilteredPokemons(setQuery, pokemon);

  return (
    <div>
      <form onSubmit={addQuery}>
        <input
          className="searchBar"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder={placeholder}
        />
        <button>Search</button>
      </form>

      <ul>
        {filteredPokemon.map((singlePokemon) => (
          <h1>{singlePokemon.name}</h1>
        ))}
      </ul>
    </div>
  );
}
