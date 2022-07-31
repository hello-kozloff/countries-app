import * as React from 'react'
import * as Styled from './styled'
import { Container } from 'components/Container'

export const Header = () => {
  return (
    <Styled.Header>
      <Container>
        <Styled.ProjectName href="/">Countries app</Styled.ProjectName>
      </Container>
    </Styled.Header>
  )
}
