import * as React from 'react'
import * as Styled from './styled'
import * as Components from './components'

export const Layout = ({ children: content }: React.PropsWithChildren) => {
  return (
    <Styled.Layout>
      <Components.Header />
      <Components.Content>{content}</Components.Content>
      <Components.Footer />
    </Styled.Layout>
  )
}
