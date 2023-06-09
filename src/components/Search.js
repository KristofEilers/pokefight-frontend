import React from "react";

export default function Search({ inputValue, onInputChange, onSearch }) {
  return (
    <form>
      <div className="flex justify-end m-5 space-x-2">
        <input
          className="text-gray-800 rounded-sm p-1 text-lg"
          value={inputValue}
          onChange={onInputChange}
          type="text"
          placeholder="Search..."
        />
        <button
          onClick={onSearch}
          className="bg-rose-500 rounded-sm  text-white text-xl p-3 font-bold"
        >
          Search
        </button>
      </div>
    </form>
  );
}

// import { useState } from "react";

// export default function Search({ pokemondb }) {
//   const [inputValue, setInputValue] = useState("");
//   const [filteredPokemon, setFilteredPokemon] = useState([]);

//   const handleSearch = (event) => {
//     event.preventDefault();

//     const filteredResults = pokemondb.filter((item) =>
//       item.name.english.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setFilteredPokemon(filteredResults);
//   };

//   return (
//     <form>
//     <input
//       className="searchBar"
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//       type="text"
//       placeholder="Search..."
//     />
//     <button onClick={handleSearch}>Search</button>
//   </form>
//   );
// }

// import { useState } from "react";

// export default function Search({ setQuery, pokemondb }) {
//   const [inputValue, setInputValue] = useState("");

//   const addQuery = (event) => {
//     event.preventDefault();
//     if (inputValue.trim() === "") {
//       alert("Your PokeSearch empty!");
//       // return;
//     }
//     setQuery(inputValue.trim());
//     setInputValue("");
//   };

//   return (
//     <div>
//       <form>
//         <input
//           className="searchBar"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           type="text"
//           placeholder="Search..."
//         />
//         <button onSubmit={addQuery}>Search</button>
//       </form>

//       <ul>
//         {pokemondb
//         .filter((singlePokemon) =>{
//           return inputValue.toLowerCase() === ''
//           ? singlePokemon.name.english
//           : singlePokemon.name.english.toLowerCase().includes(inputValue)
//           })
//           .map((singlePokemon) => (
//           <li>{singlePokemon.name.english}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
