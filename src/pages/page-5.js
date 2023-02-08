import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import SEO from "../components/layout/seo"
import { Link } from "gatsby"
import Boton from "../components/botones/BotonLink"
import BicarbonatoForm from "../components/formulas/BicaForm"

function Pagina5() {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <SEO title="Bicarbonato" />
            <Title>Deficit de Bicarbonato</Title>
            <Description>
              Formula para calular el deficit de bicarbonato
            </Description>
          </TextWrapper>
          <br />
          <FormWrapper>
            <BicarbonatoForm />
          </FormWrapper>
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
export default Pagina5

const Wrapper = styled.div`
  background: linear-gradient(180deg, #697ea0 0%, #69b6fd 100%);
`
const ContentWrapper = styled.div`
  width: 100%;
  height: 500px;
`
const TextWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
`
const Description = styled.p`
  font-size: 13px;
  line-height: 130%;
  margin-top: 10px;
  border-top: 2px solid black;
`
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const BackBut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 50px;
`
