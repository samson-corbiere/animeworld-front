import React, { useEffect, useState } from "react";
import axios from "axios"
import ListAllAnime from "../components/ListAnime/ListAllAnime";
import ListByView from "../components/ListAnime/ListByView";
import ListActionGenre from "../components/ListAnime/ListActionGenre";
import ListComicGenre from "../components/ListAnime/ListComicGenre";
import ListAnimeNovelty from "../components/ListAnime/ListAnimeNovelty";

function HomePage() {

  return (
    <div>
      <ListByView />
      <ListActionGenre /> 
      <ListComicGenre />
      <ListAnimeNovelty />
    </div>    
  )
}

export default HomePage;