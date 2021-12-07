import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
function Detail(){
    const {id} = useParams();
    const [movie, setMovie] = useState(0);
    const [loading, setLoading] = useState(true);

    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data.movie)

        setMovie(json.data.movie)
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            <h1>Detail</h1>
            {loading 
            ? (<p>Loading...</p>) 
            : <DetailMovie
                key = {movie.id}
                coverImg = {movie.medium_cover_image}
                title = {movie.title}
            />
            }
        </div>
    )
}

export default Detail;