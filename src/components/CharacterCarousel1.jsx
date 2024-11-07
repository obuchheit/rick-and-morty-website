import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"


const CharacterCarousel1 = ({favorites, setFavorites}) => {
    const [characters, setCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const fetchData = async() => {
        setLoading(true);
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
              setCharacters(response.data.results);
              setTotalPages(response.data.info.pages);
        } catch (error) {
            console.error('Error fetching data:', error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage -1)
        }
    }

    return (
        <div className='carousels-container'>
            <div className='cards-container'>
                {characters.map((character) => (
                    <Card className='character-card' key={character.id}>
                        <Card.Img variant='top' src={character.image} alt={character.name}/>
                        <Card.Body className='card-body'>
                            <Card.Title>{character.name}</Card.Title>
                            <Card.Text>
                            <strong>Species:</strong> {character.species}
                            <br />
                            <strong>Status:</strong> {character.status} & {typeof character.id}
                            </Card.Text>
                            <div className='buttons-div'>
                                <Button 
                                className='card-buttons see-more' 
                                variant='primary' 
                                onClick={() => navigate(`/acharacter/${character.id}/`)}>
                                See More
                                </Button>
                                <Button 
                                className='card-buttons add-favs' 
                                variant='warning' 
                                onClick={() => setFavorites([...favorites, character])}
                                >
                                Add to Favs
                                </Button>
                            </div>
                        
                        </Card.Body>
                    </Card>
                ))}
            </div>

            
            <div className="pagination">
                <Button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                variant="primary"
                className='ctrl-buttons'
                >
                Previous
                </Button>
                <span className="page-info">Page {currentPage} of {totalPages}</span>
                <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                variant="primary"
                className='ctrl-buttons'

                >
                Next
                </Button>
            </div>
        
        </div>   

    )
}

export default CharacterCarousel1
