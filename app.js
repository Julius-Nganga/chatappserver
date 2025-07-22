import express from 'express';

const app = express();
app.use(express.json());

// Sample route for testing
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'Hello from test route' });
});

export default app;
