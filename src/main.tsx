import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FilterDataProvider } from './context/FilterData';
import './themes/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FilterDataProvider>
      <App />
    </FilterDataProvider>
  </React.StrictMode>,
);
