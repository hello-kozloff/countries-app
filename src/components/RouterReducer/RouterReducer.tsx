import * as React from 'react'
import * as routes from 'router/routes'
import * as pages from 'pages'
import { useRoute } from 'react-router5'

export const RouterReducer = () => {
  const { route } = useRoute()

  switch (route.name) {
    case routes.Countries.name:
      return <pages.Countries />
    case routes.Country.name:
      return <pages.Country />
    default:
      return <React.Fragment />
  }
}
