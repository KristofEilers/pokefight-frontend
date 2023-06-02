import { useParams } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import { UilStar } from "@iconscout/react-unicons";
import { useState } from "react";

function PokemonDetail({ pokemondb }) {
  //console.log("pokemondb", pokemondb);
  const { pokeId } = useParams();
  const singlePokemon = pokemondb.find((item) => item.id === parseInt(pokeId));
  console.log("singlePokemon", singlePokemon.type);

  const [data, setData] = useState("");
  //console.log("data", data);
  //console.log("data", setData);

  return (
    <div className="flex justify-center">
      <div>
        <Link to={`../allpokemon/`}>
          <button className="bg-rose-500 text-white text-sm p-3 font-bold">
            Back
          </button>
        </Link>
      </div>
      <div className="  m-6 p-8">
        <p className="text-xxl lowercase font-bold p-4">
          {singlePokemon.name.english}
        </p>
        <div className="flex flex-row flex-wrap my-1.5 justify-around items-center p-4">
          {singlePokemon.type.map((type) => {
            console.log("type:", type);
            return (
              <div>
                <p className=" p-0.5 mt-1 text-xs border font-extrabold text-white mx-4 bg-amber-500 border-none w-20 rounded-full">
                  {type}
                </p>
              </div>
            );
          })}
        </div>

        <div className="my-1.5 p-7">
          <p className="text-lg font-bold py-2">Base Stats</p>
          <p className="text-base m-2 ">HP: {singlePokemon.base.HP}</p>
          <p className="text-base m-2 "> Attack: {singlePokemon.base.Attack}</p>
          <p className="text-base m-2">Defense: {singlePokemon.base.Defense}</p>
          <p className="text-base m-2"> Speed: {singlePokemon.base.Speed}</p>
        </div>

        <div className="flex flex-wrap justify-center ml-8">
          <button
            onClick={() =>
              setData("I choose you, " + singlePokemon.name.english + "!")
            }
          >
            <UilStar
              size={50}
              className="text-white cursor-pointer transition ease-out hover:scale-125"
            />
          </button>
          <p className=" text-xl m-4">{data}</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;

//<p className="text-x">I choose you, {singlePokemon.name.english}!</p>;
