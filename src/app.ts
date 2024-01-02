import express from 'express';
import authRoutes from './routes/authRoutes';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use the auth routes
app.use('/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Todo App!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
