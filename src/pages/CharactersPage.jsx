import { useState, useEffect } from "react"
import axios from "axios"
import CharacterCarousel from "../components/CharacterCarousel"
import "../styles/characters.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useOutletContext } from "react-router-dom"


function CharactersPage() {
    const [characters, setCharacters] = useState([])

    //Grabs setfavs from outlet
    const { setFavorites } = useOutletContext();  


    useEffect(() => {
        const getCharacters = async() => {
            let chars = await axios.get("https://rickandmortyapi.com/api/character")
            const charCount = chars.data.info.count

            const charUrls = [];
    
            for (let i = 1; i <= charCount; i++) {
                charUrls.push(`https://rickandmortyapi.com/api/character/${i}`)

            };

            const characterPromises = charUrls.map(url => axios.get(url));
            const charactersData = await Promise.all(characterPromises)

            setCharacters(charactersData.map(char => char.data))

        };
        getCharacters()
    }, []);

    return(
        <>
            <h1>Rick and Morty Characters</h1>
            <div className="carousels-container">
                <CharacterCarousel data={characters}/>
            </div>
        </>
        
    )
}

export default CharactersPage