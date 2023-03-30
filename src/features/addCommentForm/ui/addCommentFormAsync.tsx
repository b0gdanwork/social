import { lazy } from 'react'

const AddCommentFormAsync = lazy(async () => await import('./addCommentForm'))

export { AddCommentFormAsync }
