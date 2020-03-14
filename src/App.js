import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {connect} from 
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className={"col-detect"} lg={{ span: 12 }}>
            <h1>Name: {this.props.name}</h1>
            <h1>Age: {this.props.age}</h1>
            <button>Increase</button>
            <button>Decrease</button>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name,
    age: state.age
  };
}
function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch(),
    Decrease: () => dispatch()
  };
}

export default App;
