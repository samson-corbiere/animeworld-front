import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/HomePageCard.css"
import { Link } from "react-router-dom";
import "./style/searchBar.css";

function SearchBar() {
  const [allAnime, setAllAnime] = useState([])
  const [specificAnime, setSpecificAnime] = useState("")

  useEffect(() => {
    const getListResults = async () => {
      await axios
        .get(`http://localhost:5000/animes/all`)
        .then((res) => {
          setAllAnime(res.data);
        })
    }
    console.log(allAnime);
    getListResults()
  }, []);

  const filteredAnimes = allAnime.filter((filteredAnimes) => {
    return filteredAnimes.name
      .toLowerCase()
      .includes(specificAnime);
  });

  return (
    <div>
      <div className="searchBar-searchBox">
        <input
          className="searchBar-searchbarInput"
          type="text"
          placeholder="Search an anime"
          onChange={(e) => setSpecificAnime(e.target.value)}
        />
      </div>
      <div className="HomePageAllCardAnime">
        {filteredAnimes.map((anime) => (
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

export default SearchBar;