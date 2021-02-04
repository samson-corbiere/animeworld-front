import React, { useEffect, useState } from "react";
import axios from "axios"

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
        <div>
          <p>{anime.name}</p>
          <img src={anime.image}/>
        </div>
      ))}
    </div>
  )
}

export default ListAllAnime;