export type RulesT = 'ADMIN' | 'USER' | 'MANAGER'

export interface UserT { 
  id: string,
  avatar: string,
  username: string,
  roles: RulesT[]
}

export interface UserSchema { 
  authData?: UserT,

  _init: boolean
}
