const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json('Hello from the server!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});