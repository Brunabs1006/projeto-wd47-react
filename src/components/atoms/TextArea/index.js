import React from 'react'
import styled from 'styled-components'

const Container = styled.textarea`
  font-family: "Lucida Grande", "Helvetica", "Arial", sans-serif;
  font-size: 1em;
  line-height: 1.5;
  display: block;
  margin: 0 auto 20px;
  padding: 0.5em;
  max-width: 35em;
  background: #FFF;
  overflow: auto;
  border: none;
  width: 100%;
`

const TextArea = ({ value, ...otherProps }) => (
  <Container value={value} {...otherProps} />
)

export default TextArea
