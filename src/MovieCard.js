const MovieCard = ({ title, type, posterUrl }) => {
  return (
    <div style={{ display: "inline-block", border: "1px solid black", margin: "15px" }}>
      <section>
        <img src={posterUrl} alt={`${title} poster`} />
      </section>
      <section>
        <p>{title}</p>
        <div>
          <span>{type}</span>
        </div>
      </section>
    </div>
  );
}

export default MovieCard;