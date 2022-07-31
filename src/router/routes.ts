import { Route } from 'router5'

export const Countries: Route = {
  name: 'countries',
  path: '/',
}

export const Country: Route = {
  name: 'country',
  path: '/:country',
}
