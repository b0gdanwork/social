export interface UserT { 
  id: string,
  avatar: string,
  username: string,
}

export interface UserSchema { 
  authData?: UserT,

  _init: boolean
}
