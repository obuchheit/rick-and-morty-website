import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Card, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "../styles/details.css"

function CharacterDetailsPage() {
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const navigate = useNavigate();

    const getCharacter = async () => {
        setLoading(true)
        let { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setSelected(data)
        setLoading(false)
        console.log(data)
    }

    useEffect(() => {
        getCharacter()
    }, [id])
    return(
        <div className="container">
            {loading ? (
                <p>Loading...</p> // Show a loading message
            ) : selected ? (
                <>
                    <Card style={{ width: '24rem' }} className="card">
                        <Card.Img variant="top" src={selected.image} className="card"/>
                        <Card.Body>
                            <Card.Title>{selected.name}</Card.Title>
                            <Card.Text>
                                {selected.name} has appeared in {selected.episode.length} episodes.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className="group">
                                <strong>Species: </strong>
                                {selected.species}
                            </ListGroup.Item>
                            <ListGroup.Item className="group">
                                <strong>Place of Origin: </strong>
                                {selected.origin.name}
                            </ListGroup.Item>
                            <ListGroup.Item className="group">
                                <strong>Status: </strong>
                                {selected.status}
                            </ListGroup.Item>
                            <ListGroup.Item className="group">
                                <strong>Location: </strong>
                                {selected.location.name} {/* Make sure this is not an object */}
                            </ListGroup.Item>
                        </ListGroup>
                        <Button
                        className="return-button"
                        variant="primary"
                        onClick={() => navigate(`/characters1`)}
                        >
                        Return
                        </Button>
                    </Card>
                </>
            ) : (
                <p>Character not found.</p>
            )}
    </div>
);
}
export default CharacterDetailsPage