import * as React from 'react'
import { useRoute } from 'react-router5'
import { Page } from 'components/Page'
import { Layout } from 'components/Layout'

export const Country = () => {
  const { route } = useRoute()
  return (
    <Page name={route.name}>
      <Layout>
        <h1>View detail of the country!</h1>
      </Layout>
    </Page>
  )
}
