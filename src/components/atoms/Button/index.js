import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  padding: .5em;
  max-width: 4.5em;
  border: none;
  background: rgba(0, 0, 0, 0.25);
  color: #FFF;
  font-size: 1em;
  vertical-align: middle;
  font-family: "Lucida Grande", "Helvetica", "Arial", sans-serif;
  cursor: pointer;
  transition: .2s ease;

  & + & {
    margin-left: 1em;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.50);
  }
`

const Button = ({ text, onClick, ...otherProps }) => (
  <Container onClick={onClick} {...otherProps}>
    {text}
  </Container>
)

export default Button
