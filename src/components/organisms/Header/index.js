import React from 'react'
import styled from 'styled-components'

import Logo from '../../atoms/Logo'
import HeaderOptions from '../../molecules/HeaderOptions'

const Container = styled.header`
  background-color: #0082C7;
  font-size: 1rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 0.5em 10%;
`

const Header = () => (
  <Container>
    <Logo />
    <HeaderOptions />
  </Container>
)

export default Header
