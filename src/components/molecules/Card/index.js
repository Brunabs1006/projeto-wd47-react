import React from 'react'
import styled from 'styled-components'

const Options = styled.div`
    opacity: 0;
	transition: opacity .2s ease;
`

const Paragraph = styled.p`
    white-space: pre-line;
	max-height: 400px;
	overflow: hidden;
	font-size: 1em;
`

const Container = styled.article`
    margin: 32px 16px;
	padding: 16px;
	line-height: 1.5;
	overflow: visible;
	position: relative;
	word-wrap: break-word;
	font-family: "Lucida Grande", "Helvetica", "Arial", sans-serif;
	background: #EBEF40;
	box-shadow: 1px 1px 1px rgba(0,0,0,.1);
    transition: transform .2s ease-in;
    
    .cartao--focado, &:hover, &:focus {
        transform: scale(1.1);
        z-index: 2;
    }

    &:hover{
        ${Paragraph}
    }

    ${Options}
`
const Card = ({ text }) => (
    <Container>
        <Paragraph>{text}</Paragraph>
    </Container>
)

export default Card