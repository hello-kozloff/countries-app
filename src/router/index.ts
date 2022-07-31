import router5 from 'router5'
import withPlugins from './plugins'
import * as routes from './routes'
import options from './options'

export default withPlugins(router5([routes.Countries, routes.Country], options))
