import './index.css';
import Button from "./components/Button";

export default function App() {
    return (
        <main style={{ padding: '2rem' }}>
            <h1 className='font-bold items-center'>Creating Reusable Components</h1>

            <div className='space-x-1.5 p-2.5'>
                <Button onClick={() => alert('Login successfully')}>Login</Button>
                <Button className='bg-orange-400' onClick={() => alert('Registed successfully')}>Register</Button>
                <Button variant='danger' onClick={() => alert('You redirected back to home page')}>Back To Home</Button>
                <Button size="md">Click</Button>
                <Button size="sm">Click</Button>
                <Button variant="danger">Click</Button>
            </div> 
        </main>
    )
}

