import * as React from 'react'
import * as Styled from './styled'
import { CardProps } from './types'

export const Card = ({ flag, name, subregion }: CardProps) => {
  return (
    <Styled.Card>
      <Styled.Content>
        <Styled.Flag>{flag}</Styled.Flag>
        <Styled.Name>{name.official}</Styled.Name>
        <Styled.SubRegion>{subregion}</Styled.SubRegion>
      </Styled.Content>
      <Styled.More href={`/${name.official}`}>More info</Styled.More>
    </Styled.Card>
  )
}
