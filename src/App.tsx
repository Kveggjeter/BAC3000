import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './pages/home.tsx';

/**
 * Main component for the app
 * @constructor
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