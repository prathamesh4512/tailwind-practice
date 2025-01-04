import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NavigationBar from './components/responsive/NavigationBar.tsx'
import TimeLine from './components/responsive/TimeLine.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <NavigationBar /> */}
    {/* <TimeLine /> */}
  </StrictMode>,
)
