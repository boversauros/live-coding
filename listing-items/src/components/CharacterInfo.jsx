import { Link } from "wouter";

export const CharacterInfo = ({ character }) => (
  <>
    <header>
      <h1>{character.name}</h1>
      <Link href="/">Go Back</Link>
    </header>
    <main>
      <article>
        <img
          src={character.image}
          alt={`image of ${character.name} from Rick&Morty`}
        />
        <ul>
          <li>{character.status}</li>
          <li>{character.species}</li>
          <li>{character.gender}</li>
          <li>{character?.origin?.name}</li>
        </ul>
      </article>
    </main>
  </>
);
