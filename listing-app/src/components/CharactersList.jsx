import { Link } from "wouter";

export const CharactersList = ({ characters }) => (
  <ul className="characterList">
    {characters.map((character) => (
      <li key={character.id}>
        <Link href={`/character/${character.id}`}>
          <img
            src={character.image}
            alt={`picture of ${character.name} from Rick%Morty`}
          />
          <h2>{character.name}</h2>
        </Link>
      </li>
    ))}
  </ul>
);
