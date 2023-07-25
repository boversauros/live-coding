import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { CharacterInfo } from "../components/CharacterInfo";

const API_URL = "https://rickandmortyapi.com/api/character";

export const Character = ({ characterId }) => {
  const [character, setCharacter] = useState({});
  const [, setLocation] = useLocation();

  useEffect(() => {
    fetch(`${API_URL}/${characterId}`)
      .then((res) => res.json())
      .then((data) => {
        // handle error
        if (data.error) {
          setLocation(`/user`);
          return;
        }
        setCharacter(data);
      });
  }, [characterId, setLocation]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return <CharacterInfo character={character} />;
};
