import React, { useState } from 'react';
import { db } from '../firebase/firebase.js';           // ← exact path
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', dob: '', gender: '', medicalNotes: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });
    try {
      await addDoc(collection(db, 'patients'), {
        ...form,
        medicalNotes: form.medicalNotes.trim() || 'None',
        role: 'patient',
        createdAt: serverTimestamp(),
      });
      setStatus({ loading: false, success: true, error: '' });
      setForm({ name: '', email: '', phone: '', dob: '', gender: '', medicalNotes: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
        <h1 className="text-2xl font-semibold text-emerald-800 text-center">
          Patient Registration
        </h1>

        {['name','email','phone','dob'].map(field => (
          <input
            key={field}
            name={field}
            type={field === 'dob' ? 'date' : field === 'email' ? 'email' : 'text'}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            required
            value={form[field]}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-emerald-500"
          />
        ))}

        <select
          name="gender"
          required
          value={form.gender}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-emerald-500"
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <textarea
          name="medicalNotes"
          placeholder="Medical Notes (optional)"
          value={form.medicalNotes}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-emerald-500"
        />

        <button
          type="submit"
          disabled={status.loading}
          className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition disabled:opacity-50"
        >
          {status.loading ? 'Registering…' : 'Register'}
        </button>

        {status.success && <p className="text-green-700 text-center">Registered successfully!</p>}
        {status.error   && <p className="text-red-600 text-center">{status.error}</p>}
      </form>
    </div>
  );
}
