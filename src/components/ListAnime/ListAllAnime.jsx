import React, { useEffect, useState } from "react";
import axios from "axios"
import "../style/HomePageCard.css"
import { Link } from "react-router-dom";

function ListAllAnime() {
  const [listAllAnime, setListAllAnime] = useState([]);

  useEffect (() => {
    axios
      .get(`http://localhost:5000/animes/all`)
      .then((res) => res.data.result)
      .then((data) => setListAllAnime(data))
  }, [])

  return (
    <div>
      {listAllAnime.map(anime => (
        <Link to={`/pageAnime/${anime.id}`}>
        <div className="HomePageCardAnime">
          <p>{anime.name}</p>
          <img src={anime.image} className="HomePageImage" alt={anime.name}/>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default ListAllAnime;