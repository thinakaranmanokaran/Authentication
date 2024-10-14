import { useState } from 'react';
import axios from 'axios';

const Register = ({ toggleRegister }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='flex flex-col h-full justify-center items-center'>
            <form onSubmit={handleSubmit} className="w-auto px-10 bg-[#ffffff30] backdrop-blur-2xl py-20 rounded-2xl space-y-4 flex flex-col justify-center items-center">
                <h1 className='text-5xl font-justsans  -translate-y-8'>Register</h1>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 w-full rounded-xl border-0 focus:outline-none pl-4"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 w-full rounded-xl border-0 focus:outline-none pl-4"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 w-full rounded-xl border-0 focus:outline-none pl-4"
                    required
                />
                <div className='flex justify-between space-x-4 w-full -translate-y-2' >
                    <a href="#" onClick={toggleRegister} className='hover:underline transition-all text-sm'>Already have an Account?</a>
                    <a href="#" className='hover:underline transition-all text-sm'>Forget Password?</a>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 px-20 rounded-full">Register</button>
                <div className='flex space-x-1 translate-y-6'>
                    <div className='bg-white w-3 h-3 rounded-full'></div>
                    <div className='bg-white w-3 h-3 rounded-full'></div>
                </div>
            </form>
        </div>
    );
};

export default Register;
