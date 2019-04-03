import styled from 'styled-components'

const Logo = styled.h1`
  font-size: 2em;
  margin-bottom: 0.3em;
  font-family: "Verdana", "Helvetica", sans-serif;
  color: rgba(255, 255, 255, 0.7);
  display: inline-block;
  vertical-align: middle;
  margin-right: 1em;
  margin-bottom: 0;

  &::after {
    content: 'Ceep'
  }
`

export default Logo
