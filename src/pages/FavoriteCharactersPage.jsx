import { useOutletContext } from "react-router-dom"
import { Card, Button } from "react-bootstrap";

function FavoriteCharactersPage() {
    const { favorites, setFavorites } = useOutletContext();

    return (
        <>
            <h1>Favorite Characters</h1>

            {favorites ? (
                favorites.map((character) => (

                    <div>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={character.image} alt={character.name}/>
                            <Card.Body>
                                <Card.Title>{character.name}</Card.Title>
                                <Card.Text>
                                <strong>Species:</strong> {character.species}
                                <br />
                                <strong>Status:</strong> {character.status} & {typeof character.id}
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </div>
                    
                ))
            ) : (
                <h3>No characters Selected</h3>
            )}
        </>
    )
}

export default FavoriteCharactersPage