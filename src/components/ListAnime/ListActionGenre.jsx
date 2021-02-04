import React, { useEffect, useState } from "react";
import axios from "axios"

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
      {listActionGenre.map(anime => (
        <div>
          <p>{anime.name}</p>
          <img src={anime.image}/>
        </div>
      ))}
    </div>
  )
}

export default ListActionGenre;