import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GeneralInfo from "./components/generalinfo.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo/>
  </StrictMode>,
)
