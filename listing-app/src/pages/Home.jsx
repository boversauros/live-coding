import { useEffect, useState } from "react";
import { CharactersList } from "../components/CharactersList";

const API_URL = "https://rickandmortyapi.com/api/character";

export const Home = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        // handle error
        if (res.error) return;
        setCharacters(res.results);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Rick and Morty Characters</h1>
      </header>
      <main>
        {characters ? (
          <CharactersList characters={characters} />
        ) : (
          <p>no chars</p>
        )}
      </main>
    </>
  );
};
