/* eslint-disable react/prop-types */
export function ListOfCharacters({ characters, handleCharacter }) {
  return (
    <ul className="character-list">
      {characters.data.map((character) => (
        <li
          key={character.id}
          className="character-item"
          onClick={() => handleCharacter(character.id)}
        >
          <article className="character-card">
            <img
              src={character.image}
              alt={`image of ${character.name}`}
              className="character-image"
            />
            <p>{character.name}</p>
            <p>status: {character.status}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
