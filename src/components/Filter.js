import React from 'react'
import {useState, useEffect} from 'react';

export default function Filter({pokemon}) {
  const [filter, setFilter] = useState("");
  const [input, setInput] = useState("")

const handleInput = (e) => {
  pokemon.type = filter;
}

  const handleSelect = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };
  return (
    <>
    <form action='#'>
      <label for="pokemonType">Filter by types: </label>
      <select onChange ={handleSelect}name="pokemonType" id="pokemonType">
        <option value="AllPokemon">All Pokemon</option>
        <option value="Normal">Normal</option>
        <option value="Grass">Grass</option>
        <option value="Water">Water</option>
        <option value="Fire">Fire</option>
        <option value="Electric">Electric</option>
        <option value="Rock">Rock</option>
        <option value="Ground">Ground</option>
        <option value="Poison">Poison</option>
        <option value="Bug">Bug</option>
        <option value="Ice">Ice</option>
        <option value="Steel">Steel</option>
        <option value="Flying">Flying</option>
        <option value="Psychic">Psychic</option>
        <option value="Fighting">Fighting</option>
        <option value="Ghost">Ghost</option>
        <option value="Dragon">Dragon</option>
        <option value="Fairy">Fairy</option>
        <option value="Dark">Dark</option>
      </select>
    </form>
    <div>
    </div>
    </>
  )
}
