import { useState, useEffect } from "react";
import axios from "axios";
import CharacterCarousel1 from "../components/CharacterCarousel1";
import { useOutletContext } from "react-router-dom";

function CharactersPage1() {
    const {favorites, setFavorites} = useOutletContext();

    return (
        <>
            <h1>Rick and Morty Characters</h1>
            <CharacterCarousel1 favorites={favorites} setFavorites={setFavorites}/> 
        </>
    )
}

export default CharactersPage1