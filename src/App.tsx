import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './pages/home.tsx';

/**
 * Main component for the app. Currently, no routes, but will be added when the user-system is
 * implemented.
 */
export default function App() {

    return (
        <>
            <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
            </Router>
        </>
    )
}