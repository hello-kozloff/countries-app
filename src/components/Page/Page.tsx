import * as React from 'react'
import { PageProps } from './types'
import { Helmet } from 'react-helmet'
import { Layout } from 'components/Layout'

export const Page = ({ name, children }: PageProps) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <Layout>{children}</Layout>
    </React.Fragment>
  )
}
