
import PropTypes from "prop-types"

function DetailMovie({coverImg, title}){
    return (
        <div>
            <div>
                <img src = {coverImg}/>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

DetailMovie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default DetailMovie;