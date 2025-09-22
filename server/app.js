const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json('Hello from the server!');
});

app.get('/api/search', async (req, res) => {
    try {
        const { title } = req.query;

        const response = await axios.get(
            `http://www.omdbapi.com/?s=${title}&apikey=c61397e`
        );

        res.json(response.data);
    } catch (error) {
        console.error("❌ Error in /api/search:", error.message);
        res.status(500).json({ error: 'Failed to fetch data from OMDB API' });
    }
});

app.get('/api/movie/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const response = await axios.get(
            `http://www.omdbapi.com/?i=${id}&apikey=c61397e`
        );

        res.json(response.data);
    } catch (error) {
        console.error("❌ Error in /api/movie:", error.message);
        res.status(500).json({ error: "Failed to fetch movie details" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
