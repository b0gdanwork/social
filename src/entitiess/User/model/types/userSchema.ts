export interface UserT { 
  id: number,
  username: string,
}

export interface UserSchema { 
  authData?: UserT,

  _init: boolean
}
