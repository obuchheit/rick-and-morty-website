import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Card, ListGroup } from "react-bootstrap";
import axios from "axios"

function CharacterDetailsPage() {
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

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
        <>
        {loading ? (
            <p>Loading...</p> // Show a loading message
        ) : selected ? (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={selected.image} />
                    <Card.Body>
                        <Card.Title>{selected.name}</Card.Title>
                        <Card.Text>
                            {selected.name} has appeared in {selected.episode.length} episodes.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <strong>Species: </strong>
                            {selected.species}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Place of Origin: </strong>
                            {selected.origin.name}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Status: </strong>
                            {selected.status}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Location: </strong>
                            {selected.location.name} {/* Make sure this is not an object */}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </>
        ) : (
            <p>Character not found.</p>
        )}
    </>
);
}
export default CharacterDetailsPage