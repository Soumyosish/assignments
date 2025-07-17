/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/users', (req, res) => {
  return res.json({ users: ["Ashok", "Bishu", "Chandan"] });
});

app.post('/message', (req, res) => {
  return res.json({ status: "Message received" });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
