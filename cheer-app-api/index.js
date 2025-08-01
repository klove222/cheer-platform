const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route (you can remove if not needed)
app.get('/', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Mock login endpoint (replace with your real logic later)
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Very basic demo logic; replace with DB check in real app!
  if (email === 'test@example.com' && password === 'testpassword123') {
    return res.json({ token: 'realistic-fake-jwt-token' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Token validation endpoint (for /utils/token.ts)
app.get('/auth/validate-token', (req, res) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');

  // In real app: verify JWT or session
  if (token === 'realistic-fake-jwt-token') {
    return res.json({ valid: true });
  } else {
    return res.status(401).json({ valid: false, message: 'Invalid token' });
  }
});

// Start server on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${PORT}`);
});
