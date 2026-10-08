import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Api() {

 const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const resp = await fetch('https://devsapihub.com/api-movies');
        const data = await resp.json();

        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <h1>Películas</h1>
    <Container>
      <Row>
    {movies.map((movie) => (

    
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.image_url}  style={{ width: '200px', height: '300px' }} />
      <Card.Body>
        <Card.Title >{movie.title}</Card.Title>
        <Card.Text>
          {movie.description.substring(0, 60)}...
          <p>Estrellas: {movie.stars}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
 
    
    ))}
        {/* <div key={movie.id}>
          <img
            src={movie.image_url}
            alt={movie.title}
            style={{ width: '200px', height: '300px' }}
          />
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p><strong>Géneros:</strong> {movie.genre.join(', ')}</p>
          <p>Estrellas: {movie.stars}</p>
        </div> */}
           </Row>
    </Container>
    

  </>
  )
}