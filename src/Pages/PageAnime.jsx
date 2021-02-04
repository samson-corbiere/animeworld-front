import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import iconHome from "../img/home_icon.png";
import { Link } from "react-router-dom";

function PageAnime() {
  const [FindPageAnime, setFindPageAnime] = useState([])

  const {id} = useParams()

  useEffect(() => {
    axios 
      .get(`http://localhost:5000/pageAnime/${id}`)
      .then((res) => res.data)
      .then((data) => setFindPageAnime(data)) 
  }, [id])
  return (
    <div>
      <Link to="/">
        <img src={iconHome} alt="iconHome"/>
      </Link>
      {FindPageAnime.map(anime => (
        <div>
          <img src={anime.image} alt={anime.name}/>
          <p>{anime.name}</p>
          <p>{anime.author}</p>
          <p>Date de sortie : {anime.start_date}</p>
          <p>Synopsis</p>
          <p>{anime.description}</p>
          <p>Genre : {anime.genre}</p>
        </div>
      ))}
    </div>    
  )
}

export default PageAnime;