import React, { useEffect, useState } from "react";
import axios from "axios"

function ListComicGenre() {
  const [listComicGenre, setListComicGenre] = useState([]);

  useEffect (() => {
    axios
      .get(`http://localhost:5000/animes/comicGenre`)
      .then((res) => res.data.result)
      .then((data) => setListComicGenre(data))
  }, [])

  return (
    <div>
      <h1>Pour ce qui aime la comédie : </h1>
      {listComicGenre.map(anime => (
        <div>
          <p>{anime.name}</p>
          <img src={anime.image}/>
        </div>
      ))}
    </div>
  )
}

export default ListComicGenre;