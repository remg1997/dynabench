import React from 'react';
import {
  Container,
  Row, Col,
  Card,
  CardGroup
} from 'react-bootstrap';

class VerifyInterface extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <h2>Verify examples that fooled the model - {this.state.task.name}</h2>
        </Row>
        <Row>
          <CardGroup style={{marginTop: 20, width: '100%'}}>
            <Card border='dark'>
              <Card.Body>
                The verification interface is still under construction.
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    );
  }
}

export default VerifyInterface;