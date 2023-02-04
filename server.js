import http from "http"
import app from './app.js'

const port = Number(process.env.PORT) || 8080;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server listens to port ${port}`);
});