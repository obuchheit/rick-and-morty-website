import { useOutletContext } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../styles/favorites.css"

function FavoriteCharactersPage() {
    const { favorites, setFavorites } = useOutletContext();

    // Function to handle the removal of a character
    const handleRemove = (id) => {
        setFavorites((prevFavorites) => prevFavorites.filter((character) => character.id !== id));
    };

    return (
        <>
            <h1>Favorite Characters</h1>

            <div className="chars-container">
                {favorites.length > 0 ? (
                    favorites.map((character) => (
                        <div key={character.id}> 
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={character.image} alt={character.name} />
                                <Card.Body>
                                    <Card.Title>{character.name}</Card.Title>
                                    <Card.Text>
                                        <strong>Species:</strong> {character.species}
                                        <br />
                                        <strong>Status:</strong> {character.status}
                                    </Card.Text>
                                    <Button
                                        variant="warning"
                                        className="button"
                                        onClick={() => handleRemove(character.id)} // Call remove function on click
                                    >
                                        Remove
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    <h2>No characters Selected</h2>
                )}
            </div>


        </>
    );
}

export default FavoriteCharactersPage;
