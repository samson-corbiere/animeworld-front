import React, { useEffect, useState } from "react";
import axios from "axios"
import "../style/HomePageCard.css"
import { Link } from "react-router-dom";

function ListAnimeNovelty() {
  const [listAnimeNovelty, setListAnimeNovelty] = useState([]);

  useEffect (() => {
    axios
      .get(`http://localhost:5000/animes/novelty`)
      .then((res) => res.data.result)
      .then((data) => setListAnimeNovelty(data))
  }, [])

  return (
    <div>
      <h1 className="HomePageNameSection">Les dernières nouveautés : </h1>
      <div className="HomePageAllCardAnime">
        {listAnimeNovelty.map(anime => (
          <Link to={`/pageAnime/${anime.id}`}>
          <div className="HomePageCardAnime">
            <p>{anime.name}</p>
            <img src={anime.image} className="HomePageImage" alt={anime.name}/>
          </div>
        </Link>
        ))}
      </div>
    </div>
  )
}

export default ListAnimeNovelty;