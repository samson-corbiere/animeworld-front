import React, { useEffect, useState } from "react";
import axios from "axios"
import ListAllAnime from "../components/ListAnime/ListAllAnime";
import ListByView from "../components/ListAnime/ListByView";
import ListActionGenre from "../components/ListAnime/ListActionGenre";
import ListComicGenre from "../components/ListAnime/ListComicGenre";

function HomePage() {

  return (
    <div>
      <ListAllAnime />
      <ListByView />
      <ListActionGenre /> 
      <ListComicGenre />
    </div>    
  )
}

export default HomePage;