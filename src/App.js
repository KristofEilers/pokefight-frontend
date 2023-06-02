import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AllPokemon from "./pages/AllPokemon";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";
import Highscore from "./pages/Highscore";
import Arena from "./pages/Arena";

function App() {
  const [localPokemon, setLocalPokemon] = useState([]);
  const [pokeApiPokemon, setPokeApiPokemon] = useState([]);
  const [mergedPokemon, setMergedPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const localResponse = await axios.get("http://localhost:8080/pokemon");
        const localPokemonData = localResponse.data;
        setLocalPokemon(localPokemonData);

        const pokeApiResponse = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/"
        );
        const pokeApiPokemonData = pokeApiResponse.data.results;
        setPokeApiPokemon(pokeApiPokemonData);

        const mergedPokemonData = localPokemonData.map((local, index) => ({
          ...local,
          ...pokeApiPokemonData[index],
        }));
        setMergedPokemon(mergedPokemonData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokemon();
  }, []);


  ////////////////////// Highscore fetch start ///////////////////////////////////
const [score, setScore] = useState([])

useEffect(() => {
  async function fetchScore() {
    // Define asynchronous function
    try {
      const response = await axios.get("http://localhost:8080/score"); // Make GET request to localhost:8080/score
      setScore(response.data); // Set state with response data
    } catch (error) {
      console.error(error);
    }
  }
  fetchScore(); // Call asynchronous function
}, []);

////////////////////// Highscore fetch end ///////////////////////////////////


  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="allpokemon"
              element={<AllPokemon pokemondb={mergedPokemon} />}
            />
            <Route path="highscore" element={<Highscore score={score}/>} />
            <Route
              path="pokemon/:pokeId"
              element={<PokemonDetail pokemondb={mergedPokemon} />}
            />
            <Route path="arena" element={<Arena />} />
          </Routes>
        </main>
      </header>
    </div>
  );
}

export default App;
