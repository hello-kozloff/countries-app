import { Router } from 'router5'
import browserPlugin from 'router5-plugin-browser'
import loggerPlugin from 'router5-plugin-logger'

export default function (router: Router): Router {
  router.usePlugin(browserPlugin())

  if (process.env.NODE_ENV === 'development') {
    router.usePlugin(loggerPlugin)
  }

  return router
}
