import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Live Input</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>Current value: {inputValue}</p>

      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleFormChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleFormChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleFormChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;