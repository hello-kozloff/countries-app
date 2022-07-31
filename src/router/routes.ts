import { Route } from 'router5'

export const Countries: Route = {
  name: 'Countries',
  path: '/',
}

export const Country: Route = {
  name: 'Country',
  path: '/:country',
}
