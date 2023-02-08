import React from "react"
import styled from "styled-components"

function Foot(){
    return(
        <Footer>
            Dr. Nephtali Valles | @vallesmd.live | ©2023
        </Footer>
    )
}

export default Foot

const Footer = styled.p`
    font-size: 12px;
    color: white;
`