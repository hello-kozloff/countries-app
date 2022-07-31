import * as React from 'react'
import { RouterProvider } from 'react-router5'
import { RouterReducer } from 'components/RouterReducer'
import Styles from 'styles'
import Router from 'router'

export const App = () => {
  return (
    <React.Fragment>
      <RouterProvider router={Router.start()}>
        <RouterReducer />
      </RouterProvider>
      <Styles />
    </React.Fragment>
  )
}
