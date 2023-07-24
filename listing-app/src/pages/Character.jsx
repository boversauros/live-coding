import { Link } from "wouter";
import { useState, useEffect } from "react";

const API_URL = "https://rickandmortyapi.com/api/character";

export const Character = ({ id }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [id]);

  return (
    <>
      <header className="character-header">
        <h1>hello character {id}</h1>
        <Link href="/">Back</Link>
      </header>
      <main className="character-main">
        {character ? (
          <article>
            <img
              src={character.image}
              alt={`image of ${character.name} from rick&Morty`}
            />
            <ul>
              <li>
                <strong>Name:</strong> {character.name}
              </li>
              <li>
                <strong>Gender:</strong> {character.gender}
              </li>
              <li>
                <strong>Status:</strong> {character.status}
              </li>
              <li>
                <strong>Location:</strong> {character.location.name}
              </li>
            </ul>
          </article>
        ) : (
          <p>no character</p>
        )}
      </main>
    </>
  );
};
