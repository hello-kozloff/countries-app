import * as React from 'react'
import { useRoute } from 'react-router5'
import { Page } from 'components/Page'
import { Countries } from 'components/Countries'

export default () => {
  const { route } = useRoute()
  return (
    <Page name={route.name}>
      <Countries />
    </Page>
  )
}
