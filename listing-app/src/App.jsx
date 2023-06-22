/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Characters } from "./pages/Characters";
import "./App.css";

function parseCharactersData(data) {
  if (!data) return null;
  const { results } = data;

  return { data: results };
}

function SingleCharacter({ character, goBack }) {
  return (
    <>
      <button onClick={() => goBack()}>Back</button>
      <h2>{character.name}</h2>
      <img src={character.image} alt={`Image of ${character.name} character`} />
      <h3>Details</h3>
      <ul className="character">
        <li>{character.gender}</li>
        <li>{character.origin.name}</li>
        <li>{character.species}</li>
        <li>{character.status}</li>
      </ul>
    </>
  );
}

function App() {
  const [characters, setCharacters] = useState(null);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        if (!data) return;
        const result = parseCharactersData(data);
        setCharacters(result);
      });
  }, []);

  function handleCharacter(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) return;
        setCharacter(data);
      });
  }

  function handleBack() {
    setCharacter(null);
  }

  return (
    <>
      <header>
        <h1>Rick And Morty Listing</h1>
      </header>
      <main>
        {character ? (
          <SingleCharacter character={character} goBack={handleBack} />
        ) : (
          <Characters
            characters={characters}
            handleCharacter={handleCharacter}
          />
        )}
      </main>
    </>
  );
}

export default App;
