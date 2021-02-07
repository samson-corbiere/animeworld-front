import React, { useEffect, useState } from "react";
import axios from "axios"
import "../style/HomePageCard.css"
import { Link } from "react-router-dom";

function ListActionGenre() {
  const [listActionGenre, setListActionGenre] = useState([]);

  useEffect (() => {
    axios
      .get(`http://localhost:5000/animes/actionGenre`)
      .then((res) => res.data.result)
      .then((data) => setListActionGenre(data))
  }, [])

  return (
    <div>
      <h1>Pour ce qui aime l'action : </h1>
      <div>
        {listActionGenre.map(anime => (
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

export default ListActionGenre;