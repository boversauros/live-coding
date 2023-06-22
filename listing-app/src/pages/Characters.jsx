/* eslint-disable react/prop-types */
import { ListOfCharacters } from "../components/ListOfCharacters";

export function Characters({ characters, handleCharacter }) {
  return characters ? (
    <ListOfCharacters
      characters={characters}
      handleCharacter={handleCharacter}
    />
  ) : (
    <p>No characters</p>
  );
}
