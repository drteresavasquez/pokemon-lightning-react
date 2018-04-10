import React, { Component } from 'react';
import './App.css';
import pokes from './pokes.json';
import { Card, CardImg, CardBody,
  CardTitle, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokemon List</h1>
        </header>
        <Pokemon />
      </div>
    );
  }
}

class Pokemon extends Component{
  render(){
  return (
    <div className="Card-body">
          <Row>
            {
              Object.keys(pokes).map((poke) => {
                pokes[poke].fbkey = poke;
                return (
                <Col sm="4" key={pokes[poke].fbkey}>
                <Card className="Card">
                  <CardImg top width="100%" src={pokes[poke].ThumbnailImage} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{pokes[poke].name}</CardTitle>
                  </CardBody>
                </Card>
                </Col>
               )
              })
            }
          </Row>
          </div>
    )
  }
}


export default App;
