import * as React from 'react'
import { RouterProvider } from 'react-router5'
import { RouterReducer } from 'components/RouterReducer'
import Router from 'router'

export const App = () => {
  return (
    <RouterProvider router={Router.start()}>
      <RouterReducer />
    </RouterProvider>
  )
}
