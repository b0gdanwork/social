import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import {
  BrowserRouter
} from "react-router-dom";
import {ThemeProvider} from './providers/ThemeProvider/index';
import App from './App';

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<Index/>);