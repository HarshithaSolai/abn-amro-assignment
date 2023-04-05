const ShowDetails = ({ name, summary, language, rating, type, status, network, runtime, genres, image }) => {
  return (
    <div className="flex flex-col mt-2 gap-4 p-4 text-white rounded-md bg-abnamro-green md:col-start-5 md:col-end-7 h-fit">
      <h2 className="text-3xl text-center font-semibold text-white">{name}</h2>
      <img
        className="h-[165px] mob:w-[130px] mob:[81px] mx-auto rounded-md"
        src={image?.medium}
        alt={name}
      />
      <div
        data-testid="summary"
        className="text-white text-[15px] text-justify"
        dangerouslySetInnerHTML={{ __html: summary }}
      ></div>

      <p data-testid="genres">
        <span className="font-bold">Genres: </span>
        {genres && genres.join(", ")}
      </p>
      <p data-testid="language">
        <span className="font-bold">Language:</span> {language}
      </p>
      <p data-testid="rating">
        <span className="font-bold">Rating: </span>
        {rating.average ? rating.average : "N/A"}
      </p>
      <p data-testid="runtime">
        <span className="font-bold">Runtime: </span>
        {runtime} min
      </p>
      <p data-testid="type">
        <span className="font-bold">Type: </span>
        {type || "N/A"}
      </p>
      <p data-testid="status">
        <span className="font-bold">Status:</span> {status}
      </p>
      <p data-testid="network">
        <span className="font-bold">Network:</span> {network?.name || "N/A"}
      </p>
    </div>
  );
};

export default ShowDetails;
