import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import "../components/style/ActorAnime.css"

function ActorPageAnime() {
  const [FindActorAnime, setFindActorAnime] = useState([])

  const {id} = useParams()

  useEffect(() => {
    axios 
      .get(`http://localhost:5000/ActorAnime/${id}`)
      .then((res) => res.data)
      .then((data) => setFindActorAnime(data)) 
  }, [id])

  
  return (
    <div className="PageAnime-AllActor">
      {FindActorAnime.map(actorAnime => (
        <div>
          <div className="PageAnime-NameActor">{actorAnime.name}</div>
          <img className="PageAnime-imageActor" src={actorAnime.photo_url} alt={actorAnime.name} />
        </div>
      ))}
    </div>    
  )
}

export default ActorPageAnime;