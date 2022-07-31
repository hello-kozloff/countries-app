import * as React from 'react'
import { Route } from 'router5'

export type PageProps = React.PropsWithChildren<Pick<Route, 'name'>>
