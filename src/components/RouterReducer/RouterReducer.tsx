import * as React from 'react'
import { useRoute } from 'react-router5'
import * as routes from 'router/routes'

export const RouterReducer = () => {
  const { route } = useRoute()

  switch (route.name) {
    case routes.Countries.name:
      return <h1>Welcome to countries page</h1>
    case routes.Country.name:
      return <h1>Welcome to country detail page</h1>
    default:
      return <h1>Not found content</h1>
  }
}
