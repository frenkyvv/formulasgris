import React from "react"
import styled from "styled-components"
import Boton from "../components/botones/BotonLink"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import DopaminaForm from "../components/formulas/DopaminaForm"
import Foot from "../components/sections/Footer"
import Header from "../components/sections/Header"

function SecondPage() {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <SEO title="Dopamina" />
          <TextWrapper>
            <Header />
          </TextWrapper>
          <br />
          <FormWrapper>
            <DopaminaForm />
          </FormWrapper>
        </ContentWrapper>
        <BackBut>
          <Link to="/">
            <Boton text="Back" />
          </Link>
        </BackBut>
        <FooterDiv>
          <Foot />
        </FooterDiv>
      </Wrapper>
    </Layout>
  )
}

export default SecondPage

const Wrapper = styled.div`
  background: linear-gradient(180deg, #697ea0 0%, #69b6fd 100%);
  height: 800px;
`
const ContentWrapper = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
`
const TextWrapper = styled.div`
  justify-content: center;
  margin-top: -260px;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
`
const Description = styled.p`
  font-size: 13px;
  line-height: 130%;
  margin-top: 10px;
`
const FormWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`
const BackBut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`
const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`
const Line = styled.div`
  height: 3px;
  background-color: black;
  width: 350px;
`

{
  /* <Title>Dosis de Dopamina</Title>
            <Line />
            <Description>
              Formula para calcular la dosis de Dopamina
            </Description> */
}