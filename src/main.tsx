import { StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App';

/**
 * Where everything is booted from.
 */
createRoot(document.getElementById('root')!).render(
    <StrictMode>
    <App />
  </StrictMode>,
)

/**
 * <MapTools setMarkers={function(): void {
 *             throw new Error('Function not implemented.');
 *         } } />
 */