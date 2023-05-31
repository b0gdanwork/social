import { type RulesT } from '@/entitiess/User'
import { type FC } from 'react'
import { type RouteObject } from 'react-router'

export enum PathsAppT {
  MAIN = '/',
  ABOUT = '/about',
  PROFILE = '/profile',
  ARTICLE = '/article',
  ARTICLE_DETAILS = '/article',
  ADMIN_PANEL = '/admin',
  ARTICLE_CREATE = '/article/new',
  ARTICLE_EDIT = '/article/:id/edit',
  FORBIDDEN = '/forbidden'
}
  
export type CustomRouteObject = RouteObject & {
  name?: string 
  path?: string
  authOnly?: boolean
  rules?: RulesT[]
  icon?: FC
}
