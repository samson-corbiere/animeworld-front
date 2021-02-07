import React, { useEffect, useState } from "react";
import axios from "axios"
import "../style/HomePageCard.css"
import { Link } from "react-router-dom";

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
      <div>
        {listComicGenre.map(anime => (
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

export default ListComicGenre;