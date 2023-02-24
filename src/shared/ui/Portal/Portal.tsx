import { type ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PoratalProps {
  container?: Element | DocumentFragment,
  children: ReactNode,
}

const body = document.querySelector('body')

const Portal = (props: PoratalProps) => {

  const {
    container = body,
    children
  } = props
  
  return ReactDOM.createPortal(children, container)
}

export default Portal