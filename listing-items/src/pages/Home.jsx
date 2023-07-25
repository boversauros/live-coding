import { useEffect, useState } from "react";
import { CharacterList } from "../components/CharacterList";

const API_URL = "https://rickandmortyapi.com/api/character";

export const Home = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // handle error
        if (data.error) return;
        setCharacters(data.results);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Rick&Morty Characters</h1>
      </header>
      <main>
        {characters ? (
          <CharacterList characters={characters} />
        ) : (
          <p>no characters for today</p>
        )}
      </main>
    </>
  );
};
