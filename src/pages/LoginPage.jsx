import React, { useState } from 'react';
import { useLogin } from '../features/authentication/useLogin';
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        'username': '',
        'password': '',
    });

    const { username, password } = formData;

    const { login, isLoading } = useLogin();

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

        if (!username || !password) {
            toast.error('Please fill in all fields');
            return;
        }

        const userData = {
            username,
            password,
        };

        // Trigger login mutation
        login(userData, {
            onSettled: () => {
                setFormData({
                    'username': '',
                    'password': '',
                });
            }
        });

    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-8 mb-8 text-4xl font-bold rounded-md">Login</h1>
            <p>{isLoading}</p>
            <form className="flex flex-col gap-8 text-center" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full max-w-lg lg:w-[600px] input border-black input-bordered"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full max-w-lg lg:w-[600px] input border-black input-bordered"
                />
                <button type="submit" className="btn btn-neutral mt-8 lg:text-lg">
                    {isLoading ? <span className="loading loading-infinity loading-sm"></span> : "Login"}
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
