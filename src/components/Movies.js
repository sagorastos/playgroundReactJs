import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card, Row, Col , Container} from 'react-bootstrap';
// function Movies() {
//     return (<h1>Action Movies</h1>)
// } 

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = 'f5c9bb37'; // Replace with your actual API key
      try {
        const response = await axios.get(`http://www.omdbapi.com/?s=harry potter&apikey=${apiKey}`);

        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);


 return (
  <Container className="text-center">
      <h1>Movies</h1>
      <Row className="justify-content-center">
        {movies.map(movie => (
          <Col key={movie.imdbID} sm={6} md={4} className="mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: '100%', height: 'auto' }}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

  export default Movies