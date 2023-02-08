import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery"
import styled from "styled-components"

class OsmoEfectiva extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: "",
      edad: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    const edad = target.name

    this.setState({
      [name]: value,
      [edad]: value,
    })
  }

  handleSubmit(event) {
    const sod = this.state.nombre
    const glu = this.state.edad
    const res = glu / 18 + sod * 2
    document.querySelector("#resultado").textContent = `${res.toFixed(1)}`
    $("#boton").hide()
    $("#botonesdes").hide()
    $("#textoPrevio").show()
    event.preventDefault()
  }

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.handleSubmit}>
          <div id="boton">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Forma>
                <div id="labels">
                  <Form.Label>Sodio: </Form.Label>
                </div>
              </Forma>
              <Form.Control
                name="nombre"
                type="number"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Forma>
                <div id="labels">
                  <Form.Label>Glucosa: </Form.Label>
                </div>
              </Forma>
              <Form.Control
                name="edad"
                type="number"
                value={this.state.edad}
                onChange={this.handleChange}
              />
            </Form.Group>
          </div>
          <ButtonDiv>
            <div id="botonesdes">
              <Button variant="primary" type="submit" value="Submit">
                Submit
              </Button>
            </div>
            <TextoResultado>
              <div id="textoPrevio">La Osmolaridad es de: </div>
            </TextoResultado>
            <ResultadoDiv>
              <div id="resultado"></div>
            </ResultadoDiv>
          </ButtonDiv>
        </Form>
      </Wrapper>
    )
  }
}

export default OsmoEfectiva

const Forma = styled.div`
  #labels {
    color: black;
  }
`
const Wrapper = styled.div``

const TextoResultado = styled.div`
  #textoPrevio {
    color: black;
    display: none;
  }
`
const ResultadoDiv = styled.div`
  #resultado {
    text-align: center;
    color: black;
  }
`
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
