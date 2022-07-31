import * as React from 'react'
import { RouterProvider } from 'react-router5'
import Router from '../../router'
import { RouterReducer } from '../RouterReducer'

export const App = () => {
  return (
    <RouterProvider router={Router.start()}>
      <RouterReducer />
    </RouterProvider>
  )
}
