import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Main from "../components/sections/page-1"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <Main />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
const Wrapper = styled.div`
  background: linear-gradient(180deg, #697ea0 0%, #69b6fd 100%);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
  