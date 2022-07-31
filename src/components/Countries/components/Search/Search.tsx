import * as React from 'react'
import * as Styled from './styled'
import { SearchProps } from './types'

export const Search = (props: SearchProps) => {
  return (
    <Styled.Search>
      <Styled.Label>Search country:</Styled.Label>
      <Styled.Input {...props} type="text" placeholder="Example: Greece" />
    </Styled.Search>
  )
}
