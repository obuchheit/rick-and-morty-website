import "../styles/about.css"
import { useState } from "react"
import axios from "axios"
//import AboutCarousel from "../components/AboutCarousel.jsx"

function AboutPage() {
    const [episodes, setEpisodes] = useState("")
    const [characters, setCharacters] = useState("")
    const [locations, setLocations] = useState("")

    const handleData = async() => {
        let epData = await axios.get('https://rickandmortyapi.com/api/episode')
        setEpisodes(epData.data.info.count)
        let charData = await axios.get('https://rickandmortyapi.com/api/character')
        setCharacters(charData.data.info.count)
        let locData = await axios.get('https://rickandmortyapi.com/api/location')
        setLocations(locData.data.info.count)
    }

    handleData()

    return (
        <div className="about-container">
            {/* <div className="info-container">
                <AboutCarousel/>
            </div> */}
            <div className="text-container">
                <h1>More about the "Rick and Morty" television show</h1>
                <h2>There are more than {episodes} episodes of Rick and Morty, with a total of {characters} characters and {locations} different locations in the multiverse.</h2>
                <p>
                    Rick and Morty" is an animated science fiction sitcom created by Justin Roiland and Dan Harmon, 
                    premiering on Adult Swim in December 2013. The show follows the misadventures of an eccentric, 
                    alcoholic scientist named Rick Sanchez and his good-hearted but easily influenced grandson, Morty Smith.
                </p>
                <p>
                    The narrative is set primarily in the Smith household, where Rick frequently drags Morty on dangerous and 
                    bizarre adventures across the multiverse, exploring alternate dimensions and encountering a plethora of strange aliens, 
                    creatures, and existential challenges. The dynamic between Rick and Morty serves as a central theme, highlighting the 
                    contrast between Rick's cynical, nihilistic worldview and Morty's more naive, hopeful perspective.
                </p>
                <p>
                    The show is renowned for its sharp wit, satirical humor, and complex storytelling. It delves into deep philosophical themes, 
                    including the nature of existence, the consequences of science and technology, and the intricacies of family relationships. 
                    Each episode is packed with clever dialogue and pop culture references, often blending absurdity with poignant moments that resonate with viewers.
                </p>
                <p>
                    Visually, "Rick and Morty" employs a vibrant animation style that enhances its surreal and chaotic storytelling. 
                    The show's unique art design and inventive character concepts contribute to its distinctive aesthetic.
                </p>
                <p>
                    Over the years, "Rick and Morty" has garnered critical acclaim and a dedicated fanbase, praised for its originality and thought-provoking content. 
                    It has won several awards, including Annie Awards and a Critics' Choice Super Award, and has had a significant impact on pop culture, 
                    influencing memes and merchandise.
                </p>
                <p>
                    As of now, the show has multiple seasons, with each one expanding the lore and character development, 
                    making it not just a comedy but a multifaceted exploration of humanity through the lens of science fiction. 
                    With its combination of humor, intelligence, and emotional depth, "Rick and Morty" continues to captivate audiences around the world.
                </p>
            </div>
        </div>
    )
}

export default AboutPage