import express from 'express';
import * as http from 'http';
import videoController from './controller/videoController';

const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';
const port = parseInt(process.env.PORT || '8000');

const app = express();
const server = http.createServer(app)

function startServer() {
  server.listen(port);
}

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});

app.use(
  cors({
    credentials: true,
    origin: [CLIENT_URL],
  }),
);

app.use(express.json());

app.use('/video', videoController());

export { startServer }