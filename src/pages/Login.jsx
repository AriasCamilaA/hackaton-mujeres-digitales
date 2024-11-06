
import { Input, Button } from '@nextui-org/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate  } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { useGlobalContextHook } from '../hooks/useGlobalContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const globalContext = useGlobalContextHook();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            globalContext.set('session', true);
            navigate('/dashboard');
            toast.success('Welcome');
        } else {
            toast.error('Invalid credentials');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-primary">
            <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username:</label>
                        <Input
                            fullWidth
                            type="text"
                            placeholder='admin'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Password:</label>
                        <Input
                            fullWidth
                            type="password"
                            placeholder='admin'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="w-full" color='primary' variant='ghost' >Login</Button>
                </form>
            </div>
        </div>
    );
};

export default Login;