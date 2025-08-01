// app.config.js
import 'dotenv/config';

export default ({ config }) => ({
  ...config,
  extra: {
    // fall back to localhost if .env is missing
    API_URL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000',
  },
});
