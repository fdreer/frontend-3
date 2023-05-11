export default function MovieDiv({movies}) {
  return (
    <article>
      <p>
        <b>Nombre: {movies.nombre}</b> --- Genero: {movies.genero}
      </p>
    </article>
  );
}
