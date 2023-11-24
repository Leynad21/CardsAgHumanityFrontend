import React, { useState } from 'react';
import { useRegister } from '../features/authentication/useRegister';
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        'username': '',
        'password': '',
        'rePassword': '',
    });

    const { username, password, rePassword } = formData;

    const { register, isLoading } = useRegister();

    const handleChange = (e) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Clear previous error messages
        toast.dismiss();

        if (!username.trim()) {
            toast.error('Please enter a username.');
        } else if (password.length < 8) {
            toast.error('Password must be at least 8 characters long.');
        } else if (rePassword !== password) {
            toast.error('Passwords do not match.');
        } else {
            const userData = {
                username,
                password,
            };
            register(userData)
        }
    };

    return (
        <div className="flex flex-col items-center justify-center ">
            <h1 className="mt-8 mb-8 text-4xl font-bold rounded-md">Register</h1>
            <form className="flex flex-col gap-8 text-center " onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    className="w-full max-w-lg lg:w-[600px] input border-black input-bordered"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className="w-full max-w-lg lg:w-[600px] input border-black input-bordered"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="rePassword"
                    value={rePassword}
                    onChange={handleChange}
                    className="w-full max-w-lg lg:w-[600px] input border-black input-bordered"
                />
                <button type="submit" disabled={isLoading} className="btn btn-neutral mt-8 lg:text-lg">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
