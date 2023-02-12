import React from "react"
import styled from "styled-components"

function Header() {
  return (
    <Wrapper>
      <Background />
      <Titulo>Dopamina</Titulo>
      <Subtitulo>Formula para obtener la dosis de Dopamina</Subtitulo>
      <Line />
    </Wrapper>
  )
}

export default Header
const Wrapper = styled.div``
const Background = styled.img`
  width: 350px;
  height: 70px;
  opacity: 0.4;
  background-color: white;
  position: absolute;
  margin-left: -46px;
`
const Titulo = styled.h1`
  font-size: 35px;
  position: absolute;
  font-weight: bold;
  margin-left: -20px;
`
const Subtitulo = styled.p`
  font-size: 13px;
  position: absolute;
  padding-top: 38px;
  margin-left: -20px;
`
const Line = styled.div`
  background-color: black;
  height: 2px;
  width: 350px;
  margin-top: 56px;
  margin-left: -20px;
  position: absolute;
`
