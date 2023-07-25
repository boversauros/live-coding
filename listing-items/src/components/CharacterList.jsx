import { Link } from "wouter";

export const CharacterList = ({ characters }) => {
  return (
    <ul className="characters-list">
      {characters.map((character) => (
        <li key={character.id} className="characters-item">
          <Link href={`/character/${character.id}`}>
            <img
              src={character.image}
              alt={`image of ${character.name} from Rick&Morty show`}
            />
            <h2>{character.name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};
