import express from 'express';
const app = express();
const port = 3000;

app.get('/count-letters', async (req, res) => {
    const input = req.query.input;
    if (!input) {
        return res.status(400).send('Missing input parameter');
    }

    const letters = input.replace(/[^a-zA-Z]/g, '');
    res.json({ letters: letters.length });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
