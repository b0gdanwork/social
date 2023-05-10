import { lazy } from 'react'

const AdminPanelPageAsync = lazy(async () => await import('./AdminPanelPage'))

export default AdminPanelPageAsync
