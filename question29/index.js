const express = require("express");
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    return res.json({ message: "Welcome to the home route!" });
});
app.get('/about', (req, res) => {
    return res.json({ message: "This is the about route." });
});
app.get('/users', (req, res) => {
    return res.json({ users: ["Ashok", "Bishu", "Chandan"] });
});
app.post('/message', (req, res) => {
    return res.json({ status: "Message received" });
});
app.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    console.log("Deleted user id:", id);
    return res.json({ status: `User with id ${id} deleted` });
});
const port = 5000;
app.listen(port, () => {
    console.log(`port is listening on ${port}`);
});