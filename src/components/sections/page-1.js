import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Boton from "../botones/BotonLink"

class Main extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>VallesMD</Title>
        <Subtitle>Bienvenidos a la App de VallesMD</Subtitle>
        <ContentWrapper>
          <Link to="/page-2/">
            <Boton text="Dopamina" />
          </Link>
          <Link to="/page-3/">
            <Boton text="Dobutamina" />
          </Link>
          <Link to="/page-4/">
            <Boton text="Deficit de Agua" />
          </Link>
          <Link to="/page-5/">
            <Boton text="Bicarbonato" />
          </Link>
          <Link to="/page-6/">
            <Boton text="Na Corregido" />
          </Link>
          <Link to="/page-7/">
            <Boton text="Alteplase" />
          </Link>
          <Link to="/page-8/">
            <Boton text="Osmolaridad" />
          </Link>
          <Link to="/page-9/">
            <Boton text="SIR" />
          </Link>
        </ContentWrapper>
      </Wrapper>
    )
  }
}

export default Main
const Wrapper = styled.div`
  height: 600px;
`
const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Subtitle = styled.h2`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  padding-bottom: 10px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const ContentWrapper = styled.div`
  border-top: 2px solid black;
  max-width: 100%;
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
  gap: 20px;
`
