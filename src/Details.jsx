import data from "./assets/data.json";

const Details = () => {
  return (
    <>
      {data.map((movie) => {
        console.log(movie.category);
        return (
          <section key={movie.category} className='category'>
            <h2>{movie.category}</h2>
            <div className='pictures'>
              {movie.images.map((picture) => {
                console.log(picture);
                return <img src={picture} alt={picture} key={picture} />;
              })}
            </div>
          </section>
        );
      })}
    </>
  );
};
export default Details;
