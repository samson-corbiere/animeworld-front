import React, { useEffect, useState } from "react";
import axios from "axios"
import "../style/HomePageCard.css"
import { Link } from "react-router-dom";

function ListByView() {
  const [listByView, setListByView] = useState([]);

  useEffect (() => {
    axios
      .get(`http://localhost:5000/animes/view`)
      .then((res) => res.data.result)
      .then((data) => setListByView(data))
  }, [])

  return (
    <div>
      <h1>Les plus regardés : </h1>
      <div>
        {listByView.map(anime => (
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

export default ListByView;