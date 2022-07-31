import * as React from 'react'
import { useRoute } from 'react-router5'
import { Page } from 'components/Page'

export const Countries = () => {
  const { route } = useRoute()
  return (
    <Page name={route.name}>
      <h1>Hello countries page!</h1>
    </Page>
  )
}
