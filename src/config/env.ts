export default {
  API_BASE_URL: process.env.API_BASE_URL ?? 'http://localhost:8000',
  JWT_STORED_KEY: process.env.JWT_STORED_KEY ?? 'JWT_STORED_KEY',
} as const;
