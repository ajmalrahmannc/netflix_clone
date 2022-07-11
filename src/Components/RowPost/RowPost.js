import axios from '../../axios'
import Youtube from 'react-youtube'
import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { ImageUrl , API_KEY} from '../../Constatnts/Constants'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response => {
      // console.log(response.data);
      setMovies(response.data.results);
    });
  },[]);


  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
      else{
        console.log('trailer not available');
      }
    })
  }


  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) =>

          <img onClick={()=> handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${ImageUrl+obj.backdrop_path}`} alt="Posters" />
        )}
      </div>
         { urlId && <Youtube opts={opts} videoId={urlId.key} />   }
    </div>
  )
}

export default RowPost