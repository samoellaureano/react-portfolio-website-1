import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);

// import ReactDOM from 'react-dom';
// ReactDOM.render(<App/>, document.querySelector('#root'));

/* import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
const container = document.querySelector('#root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />); */