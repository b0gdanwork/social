import ReactDOM from 'react-dom/client';
import s from './index.module.scss'
import './index.scss'

export default function App() {
  return (
    <div className={s.all}>indexindex</div>
  )
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App/>);