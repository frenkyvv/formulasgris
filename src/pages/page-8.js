import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { Link } from "gatsby"
import Boton from "../components/botones/BotonLink"
import Button from "react-bootstrap/Button"
import $ from "jquery"
import OsmoPlasmaticaForm from "../components/formulas/OsmoPlas"
import OsmoEfectiva from "../components/formulas/OsmoEfe"

class Pagina8 extends React.Component {
  clickHombre(e) {
    $("#escoger").hide()
    $("#formHom").show()
  }
  clickMujer(e) {
    $("#escoger").hide()
    $("#formMuj").show()
  }
  render() {
    return (
      <Layout>
        <Wrapper>
          <ContentWrapper>
            <SEO title="Deficit de Agua" />
            <TextWrapper>
              <Titulo>Osmolaridad</Titulo>
              <Description>Formula para calcular la Osmolaridad</Description>
              <div id="escoger">
                <Botones>
                  <Button
                    variant="primary"
                    onClick={this.clickHombre}
                    id="botHom"
                  >
                    Plasmatica
                  </Button>
                  <Button
                    variant="primary"
                    onClick={this.clickMujer}
                    id="botMujer"
                  >
                    Especifica
                  </Button>
                </Botones>
              </div>
              <FormHombre id="formHom">
                <OsmoPlasmaticaForm />
              </FormHombre>
              <FormMujer id="formMuj">
                <OsmoEfectiva />
              </FormMujer>
            </TextWrapper>
          </ContentWrapper>
          <BackBut>
            <Link to="/">
              <Boton text="Back" />
            </Link>
          </BackBut>
        </Wrapper>
      </Layout>
    )
  }
}
export default Pagina8

const Wrapper = styled.div`
  background: linear-gradient(180deg, #697ea0 0%, #69b6fd 100%);
`
const ContentWrapper = styled.div`
  width: 100%;
  height: 600px;
`
const TextWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const Titulo = styled.h1`
  font-weight: bold;
  font-size: 30px;
`
const Description = styled.p`
  font-size: 13px;
  line-height: 130%;
  margin-top: 10px;
  border-top: 2px solid black;
`
const Botones = styled.div`
  max-width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`
const BackBut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 50px;
`
const FormHombre = styled.div`
  display: none;
`
const FormMujer = styled.div`
  display: none;
`
