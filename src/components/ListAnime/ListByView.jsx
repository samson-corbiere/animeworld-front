import React, { useEffect, useState } from "react";
import axios from "axios"

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
      <h1>list by view</h1>
      {listByView.map(anime => (
        <div>
          <p>{anime.name}</p>
          <img src={anime.image}/>
        </div>
      ))}
    </div>
  )
}

export default ListByView;