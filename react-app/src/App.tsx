import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css';
import Login from './pages/Login';
import { Register } from './pages/Register';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Link to="/Login" style={{ marginRight: '10px' }}>Login</Link>
                <Link to="/Register">Register</Link>
            </div>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
