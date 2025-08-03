// createRouteObject.ts
// createRouteObject.ts
import type { RouteObject } from 'react-router-dom'

export const createRouteObject = <T extends RouteObject[]>(routes: T): T =>
  routes
