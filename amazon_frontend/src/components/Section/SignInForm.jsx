import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, setError } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const error = useSelector((state) => state.auth.error);
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
                                                                                               
    axios.post("http://localhost:5001/login", { email, password }, {
      
    })
      .then(response => {
        const { token, refresh_token } = response.data;
        dispatch(signIn({ token, refresh_token, email }));
        navigate("/")
      })
      .catch(err => {
        setError(err.response.data.message);
      })

    // Simulated API call
    // if (email === 'user@example.com' && password === 'password') {
    //   dispatch(signIn({ email }));
    // } else {
    //   dispatch(setError('Invalid credentials.'));
    // }
  };

  return (
    <div className="max-w-sm mx-auto mt-12 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm font-medium">{error}</p>
        )}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
