import * as React from 'react'
import { useRoute } from 'react-router5'
import { Page } from 'components/Page'
import { Layout } from 'components/Layout'

export const Countries = () => {
  const { route } = useRoute()
  return (
    <Page name={route.name}>
      <Layout>
        <h1>Hello countries page!</h1>
      </Layout>
    </Page>
  )
}