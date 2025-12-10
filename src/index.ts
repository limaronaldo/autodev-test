import express from 'express';

const SERVER_START_TIME = Date.now();

export function hello() { return "Hello, World!"; }

const app = express();

app.get('/health', (req, res) => {
  const uptimeMs = Date.now() - SERVER_START_TIME;
  const uptimeSeconds = Math.floor(uptimeMs / 1000);
  
  res.json({
    status: 'ok',
    uptime_seconds: uptimeSeconds
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
