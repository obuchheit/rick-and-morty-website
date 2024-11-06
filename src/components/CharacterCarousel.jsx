import { useState } from 'react';
import { Carousel, Card, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"


const CharacterCarousel = ({ data }) => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();


  const chunkData = (data, size) => {
    const chunks = [];
    for (let i = 0; i < data.length; i += size) {
      chunks.push(data.slice(i, i + size));
    }
    return chunks;
  };

  const cardChunks = chunkData(data, 20);


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };





  return (
    <Carousel className='carousel' activeIndex={index} onSelect={handleSelect} interval={null}>
      {cardChunks.map((chunk, index) => (
        <Carousel.Item key={index} className='carousel-item'>
          <Row className='g-0'>
            {chunk.map((item, cardIndex) => (
              <Col key={cardIndex} xs={8} sm={6} md={3} lg={2}>
                <Card className='carousel-cards'>
                  <Card.Img className='card-img' variant='top' src={item.image}/>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.name} is a {item.species}.
                    </Card.Text>
                    <Button variant='primary' onClick={() => navigate(`/acharacter/${item.id}`)}>
                      See More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
      
    </Carousel>
  );
}

export default CharacterCarousel;