import React, { useEffect, useState } from "react";
import axios from "axios"
import ListAllAnime from "../components/ListAnime/ListAllAnime";
import ListByView from "../components/ListAnime/ListByView";
import ListActionGenre from "../components/ListAnime/ListActionGenre";
import ListComicGenre from "../components/ListAnime/ListComicGenre";
import ListAnimeNovelty from "../components/ListAnime/ListAnimeNovelty";
import Navbar from "../components/Navbar";

function HomePage() {

  return (
    <div className="HomePageGlobalDiv">
      <Navbar />
      <ListByView />
      <ListActionGenre /> 
      <ListComicGenre />
      <ListAnimeNovelty />
    </div>    
  )
}

export default HomePage;