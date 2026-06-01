'use client';

import { useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    fullName: '',
    login: '',
    password: '',
  });

  const handleSubmit = async () => {
    const url = isLogin
      ? '${process.env.NEXT_PUBLIC_API_URL}/auth/login'
      : '${process.env.NEXT_PUBLIC_API_URL}/auth/register';

    const payload = isLogin
      ? {
          login: form.login,
          password: form.password,
        }
      : form;

    const response = await axios.post(url, payload);

    alert(JSON.stringify(response.data, null, 2));
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>{isLogin ? 'Login' : 'Register'}</h1>

      {!isLogin && (
        <input
          placeholder="Full Name"
          onChange={(e) =>
            setForm({ ...form, fullName: e.target.value })
          }
        />
      )}

      <br />
      <br />

      <input
        placeholder="Login"
        onChange={(e) =>
          setForm({ ...form, login: e.target.value })
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
        {isLogin ? 'Login' : 'Register'}
      </button>

      <br />
      <br />

      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Register' : 'Login'}
      </button>
    </main>
  );
}