import React, { useEffect, useState } from "react";
import axios from "axios";

function SearchBar() {
  const [getResultsSearches, setGetResultsSearches] = useState([])
  const [searches, setSearches] = useState("")

  const handleChangeNameAnime = (e) => {
    setSearches(e.target.value);
  }

  const handleForm = async () => {
    let params = {
      searches,
    };
    try {
      await axios
        .post(`/searches/nameAnime`, params)
        .then((response) => response)
        .then((response) => {
          setGetResultsSearches(response);
        });
    } catch (err) {
      alert("erreur recherche film");
    }
  }


  return (
    <div>
      <form onSubmit={handleForm}>
      <input
        className="champs"
        type="text"
        value={searches}
        onChange={handleChangeNameAnime}
      />
      <input
        type="submit"
        value="chercher un anime"
      />
      </form>
      <div>
        {getResultsSearches.name}
      </div>
    </div>
  )
}

export default SearchBar;