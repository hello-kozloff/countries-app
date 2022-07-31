import { Options } from 'router5'
import { Countries } from './routes'

export default {
  defaultRoute: Countries.name,
  queryParamsMode: 'loose',
  allowNotFound: true,
} as Options
