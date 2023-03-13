import { type ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/reduxConfig';

import type StoreSchema from '../config/StoreSchema'

interface PropsT {
  children: ReactNode,
  initialState?: StoreSchema
}

const StoreProvider = ({ children, initialState }: PropsT) => {

  const store = createReduxStore(initialState)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StoreProvider