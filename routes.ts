import type { RouteDefinition } from 'pelelajs'
import { Detail } from './src/detail'
import { Home } from './src/home'

export const routes: RouteDefinition[] = [
  { path: '/', component: Home },
  { path: '/producto/:id', component: Detail },
  { path: '*', component: Home },
]
