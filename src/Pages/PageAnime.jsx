import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../components/style/PageAnime.css";

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
      <Navbar />
      {FindPageAnime.map(anime => (
        <div className="PageAnime-boxContainer">
          <div>
            <img src={anime.image} alt={anime.name} className="PageAnime-image"/>
            <p className="PageAnime-titleAnime">{anime.name}</p>
          </div>
          
          <div className="PageAnime-text">
            <p>{anime.author}</p>
            <p>Date de sortie : {anime.start_date}</p>
            <p>Synopsis</p>
            <p>{anime.description}</p>
            <p>Genre : {anime.genre}</p>
          </div>
        </div>
      ))}
    </div>    
  )
}

export default PageAnime;