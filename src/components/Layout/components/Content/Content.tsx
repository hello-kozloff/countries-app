import * as React from 'react'
import * as Styled from './styled'

export const Content = ({ children: content }: React.PropsWithChildren) => {
  return <Styled.Content>{content}</Styled.Content>
}
