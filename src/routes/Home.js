import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
    const json = await response.json();

    // const json = await (
    //   await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    //   )
    // ).json();
    // 위 response와 json의 같은버전 코드

    setMovies(json.data.movies)
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  },[])
  return (
    <div>
      {loading ? (
          <h1>Loading...</h1>
        ) : (
          <ol>
            {movies.map((item) => (
              <Movie 
                key = {item.id}
                id = {item.id}
                medium_cover_image = {item.medium_cover_image}
                title = {item.title}
                summary = {item.summary}
                genres = {item.genres}
              />
            ))}
          </ol>
        )}
    </div>
  );
}

export default Home;