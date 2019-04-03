import React from 'react'
import styled from 'styled-components'

import Button from '../../atoms/Button'

const Container = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 1rem;
  flex: 1;
  text-align: right;
`

const HeaderOptions = () => (
  <Container>
    <Button id="btnMudaLayout" text="Linhas" />
    <Button id="btnAjuda" text="?"></Button>
    <Button id="btnSalvar" text="Salvar"></Button>
  </Container>
)

export default HeaderOptions
