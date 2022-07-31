import * as React from 'react'
import { useRoute } from 'react-router5'
import { Page } from 'components/Page'
import { Country } from 'components/Country'

export default () => {
  const { route } = useRoute()
  return (
    <Page name={`${route.name} / ${route.params.country}`}>
      <Country />
    </Page>
  )
}
