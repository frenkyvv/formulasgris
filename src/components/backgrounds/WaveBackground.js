import React from "react"
import styled from "styled-components"

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/waves/wave1.png"
        style={{ top: "50px", filter: `blur(60px)` }}
      />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "150px" }} />
      <Wave src="/images/waves/hero-wave3.svg" style={{ top: "250px" }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
const Wave = styled.img`
  position: absolute;
  z-index: -1;
`
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  background: linear-gradient(180deg, #697ea0 0%, #69b6fd 100%);
  z-index: -1;
`

// background: linear-gradient(180deg, #697ea0 0%, #69b6fd 100%);
