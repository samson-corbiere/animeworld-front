import React, { useEffect, useState } from "react";
import axios from "axios"
import "../style/ListByView.css"

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
      {listByView.map(anime => (
        <div className="ListByView-cardAnime">
          <p>{anime.name}</p>
          <img src={anime.image} className="ListByView-image" alt={anime.name}/>
        </div>
      ))}
    </div>
  )
}

export default ListByView;