import { useEffect, useState } from "react";
import Movie from "../components/Movie";

//----- Swiper 용 import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-coverflow";
import "swiper/components/pagination";
import "../css/swiper.css";
import Swipercore, {Navigation, EffectCoverflow} from "swiper";
//----- Swiper 용 import 종료

function Home(){
  Swipercore.use([Navigation,EffectCoverflow]);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
    const json = await response.json();

    /* 
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    위 response와 json의 같은버전 코드
    */

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
          <Swiper 
            effect={'coverflow'}
            slidesPerView={'5'}
            loop={true}
            coverflowEffect={{
              "rotate": 20,
              "stretch": -50,
              "depth": 100,
              "modifier": 1,
              "slideShadows": true
            }}
            pagination={true}
            className="mySwiper"
          >
            {movies.map((item) => (
              <SwiperSlide>
                <Movie 
                  key = {item.id}
                  id = {item.id}
                  medium_cover_image = {item.medium_cover_image}
                  title = {item.title}
                  summary = {item.summary}
                  genres = {item.genres}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
    </div>
  );
}

export default Home;