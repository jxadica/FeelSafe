const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5500;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://127.0.0.1:5500',
  }));
let musicData = [
  { id: 1, title: 'Ethereal Allure', artist: 'Amber Glow', url: 'https://www.epidemicsound.com/track/zoM5QQoZxp/' },
  { id: 2, title: 'Danro', artist: 'Sugoi', url: 'https://www.epidemicsound.com/track/Q0vr9NmdQ0/' },
];

app.get('/music', (req, res) => {
  res.json(musicData);
});

app.get('/music/:id', (req, res) => {
  const musicId = parseInt(req.params.id);
  const music = musicData.find((m) => m.id === musicId);

  if (music) {
    res.json(music);
  } else {
    res.status(404).json({ error: 'Music not found' });
  }
});

app.post('/api/music', (req, res) => {
  const newMusic = req.body;
  musicData.push(newMusic);
  res.status(201).json(newMusic);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
