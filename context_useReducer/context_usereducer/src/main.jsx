import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
// import Provider from "./store/Provider.jsx"; //không nên đặt provider chung chung vì trong 1 dự án có thể có nhiều provider
import { StoreProvider } from "./store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider> */}
    <Router>
      <StoreProvider>
        <App />
      </StoreProvider>
    </Router>
    {/* </Provider> */}
  </StrictMode>,
)
