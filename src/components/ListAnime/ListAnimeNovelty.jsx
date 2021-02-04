import React, { useEffect, useState } from "react";
import axios from "axios"

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
      <h1>Les dernières nouveautés : </h1>
      {listAnimeNovelty.map(anime => (
        <div>
          <p>{anime.name}</p>
          <img src={anime.image}/>
        </div>
      ))}
    </div>
  )
}

export default ListAnimeNovelty;