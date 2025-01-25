import { StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import Navigation from "./components/Navigation.tsx";
import MapTools from "./components/mapUtilities/MapTools.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Navigation/>
        <MapTools setMarkers={function(): void {
            throw new Error('Function not implemented.');
        } } />
    <App />
  </StrictMode>,
)
