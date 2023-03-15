import { lazy } from 'react'

const NotFoundPageAsyns = lazy(async () => await import('./NotFoundPage'))

export default NotFoundPageAsyns
