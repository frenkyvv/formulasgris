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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
  