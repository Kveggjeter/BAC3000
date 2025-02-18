import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './assets/styles/appStyle.css'
import { Home } from './pages/home.tsx';
import { Login } from './pages/login.tsx';

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
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
            </Router>
        </>
    )
}