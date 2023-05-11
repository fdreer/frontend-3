import MovieDiv from './components/Movie';
import movies from '../../fakeApi/movies.json';

export default function Clase2() {
  const handleClick = () => {
    console.log('LIKE!');
  };

  return (
    <>
      <h1>Toy Story 3</h1>
      <p>
        Toy Story es una película infantil de animación por computadora dirigida
        por John Lasseter, estrenada en 1995 y producida por Pixar. Fue el
        primer largometraje de Pixar, además de la primera cinta animada
        completamente con efectos digitales en la historia del cine.
      </p>
      <button onClick={handleClick}>Dale LIKE!</button>

      <section>
        {movies.map((movie) => (
          <MovieDiv movies={movie} key={movie.id} />
        ))}
      </section>
    </>
  );
}
