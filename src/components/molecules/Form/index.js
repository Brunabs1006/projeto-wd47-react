import React from 'react'
import styled from 'styled-components'

import TextArea from '../../atoms/TextArea'
import Button from '../../atoms/Button'

const Container = styled.form`
  font-size: 1rem;
  margin: 0 auto 2em;
  background: rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 3;
  padding: 1.5em 10% 1em;
  text-align: center;
`

const Form = () => (
  <Container>
    <TextArea placeholder="Digite aqui" />
    <Button text="Salvar" type="button" />
  </Container>
)

export default Form
