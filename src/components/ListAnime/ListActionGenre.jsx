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