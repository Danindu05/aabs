import React, { useState } from 'react';

export default function LoginNeumorphism() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    // TODO: integrate your auth logic
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-4
                 bg-gradient-to-br from-emerald-50 to-emerald-100"
    >
      {/* Optional soft leaf overlay */}
      <div className="absolute inset-0 bg-[url('/img/leaves.jpg')] bg-cover bg-center opacity-10"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-sm p-8 rounded-3xl
                   bg-[#e6f5f0] shadow-[9px_9px_16px_#c2ded7,-9px_-9px_16px_#ffffff]
                   flex flex-col gap-6"
      >
        <h2 className="text-3xl font-serif text-emerald-800 text-center">
          Ayurveda Login
        </h2>

        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className="bg-[#e6f5f0] p-3 rounded-xl
                     shadow-inner focus:shadow-none focus:outline-none
                     focus:ring-2 focus:ring-emerald-300 transition"
          required
        />

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          className="bg-[#e6f5f0] p-3 rounded-xl
                     shadow-inner focus:shadow-none focus:outline-none
                     focus:ring-2 focus:ring-emerald-300 transition"
          required
        />

        <button
          type="submit"
          className="py-3 rounded-xl text-white font-semibold
                     bg-gradient-to-r from-emerald-600 to-emerald-700
                     shadow-[inset_5px_5px_10px_#529c87,inset_-5px_-5px_#a9fff5]
                     hover:shadow-inner hover:scale-[1.02]
                     transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm text-emerald-700 mt-4">
          Don’t have an account?{' '}
          <a
            href="/register"
            className="font-medium underline hover:text-emerald-900 transition"
          >
            Register here
          </a>
        </p>
      </form>
    </div>
  );
}
