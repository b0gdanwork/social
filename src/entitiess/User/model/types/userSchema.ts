export interface UserT { 
  id: number,
  avatar: string,
  username: string,
}

export interface UserSchema { 
  authData?: UserT,

  _init: boolean
}
