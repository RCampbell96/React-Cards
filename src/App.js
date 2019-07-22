import React, { Component } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'

class App extends Component {
  constructor() {
    super()
    this.state = {
      locations: []
    }
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          locations: data
        })
      })
  }

  render() {
    return (
      <div className="App">

        <h1>Ghibli Film Locations</h1>
        
        {this.state.locations.map((value, key) => (
          <Card className={value.name}>
            <Card.Body >
              <Card.Title className="title">Locations: {key.name}{value.name}</Card.Title>
              <Card.Text>

                <br />

                Climate: {value.climate}

                <br /> <br />

                Terrain: {value.terrain}

              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small></small>
            </Card.Footer>
          </Card>
        ))}
      </div>
    )
  }
}


export default App;
