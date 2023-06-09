import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UilStar } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

function PokemonDetail() {
  const { pokeId } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeId}`
        );
        setPokemonData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pokeId]);

  if (!pokemonData) {
    // Add a loading state or return null while the data is loading
    return null;
  }

  // console.log("pokemonData", pokemonData);

  const calculatePercentage = (stat) => {
    return (stat / 100) * 100;
  };

  return (
    <div className=" flex p-4 m-2 w-screen justify-center">
      <div className="flex flex-col w-screen p-1 ">
        <Link to="../allpokemon/" className="flex ml-10 ">
          <button className="bg-rose-500 rounded-sm text-white text-lg h-12 w-40 font-bold">
            Back
          </button>
        </Link>

        <div className=" rounded overflow-hidden p-2 m-2 w-2/4 self-center">
          <p className="text-xxl lowercase font-bold p-4">
            {pokemonData.name.english || pokemonData.name}
          </p>
          {pokemonData.sprites && (
            <div className="flex justify-center">
              <img
                src={pokemonData.sprites.other.dream_world.front_default}
                alt="Sprite"
                className=" w-72 h-56 m-6 "
                viewBox="0 0 24 24"
              />
            </div>
          )}
          <div className="flex flex-row flex-wrap my-1.5 justify-around items-center p-2">
            {pokemonData.types.map((type, index) => {
              // console.log("type:", type);
              return (
                <div key={index}>
                  <p className="p-0.5 mt-1 text-base border text-white mx-4 font-extrabold bg-amber-600 border-none w-40 h-8 rounded-full">
                    {type.type.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col self-center w-2/4">
          <div className="my-1.5 p-8z m-8 ">
            <p className="text-lg font-bold ">Base Stats</p>
            <p className="text-base m-2">
              HP: {pokemonData.stats[0].base_stat}
            </p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-50">
                <div
                  style={{
                    width: `${calculatePercentage(
                      pokemonData.stats[0].base_stat
                    )}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                ></div>
              </div>
            </div>
            <p className="text-base m-1">
              Attack: {pokemonData.stats[1].base_stat}
            </p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-50">
                <div
                  style={{
                    width: `${calculatePercentage(
                      pokemonData.stats[1].base_stat
                    )}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400"
                ></div>
              </div>
            </div>
            <p className="text-base m-1">
              Defense: {pokemonData.stats[2].base_stat}
            </p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-50">
                <div
                  style={{
                    width: `${calculatePercentage(
                      pokemonData.stats[2].base_stat
                    )}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-400"
                ></div>
              </div>
            </div>
            <p className="text-base m-1">
              Speed: {pokemonData.stats[5].base_stat}
            </p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-50">
                <div
                  style={{
                    width: `${calculatePercentage(
                      pokemonData.stats[5].base_stat
                    )}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-300"
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col self-center">
            <Link to="/arena" state={{ chosenPokemon: pokemonData }}>
              <button
                className="self-center"
                onClick={() =>
                  setData(
                    "I choose you, " +
                      (pokemonData.name.english || pokemonData.name) +
                      "!"
                  )
                }
              >
                <UilStar
                  size={50}
                  className="text-white cursor-pointer transition ease-out hover:scale-125"
                />
              </button>
            </Link>
            <p className="flex-row justify-items-center text-xl m-4">{data}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
