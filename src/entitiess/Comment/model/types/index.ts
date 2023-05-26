import { type UserT } from '@/entitiess/User'

export interface CommentT {
  id: string,
  text: string,
  user: UserT,
}

export interface CommentList {

}
