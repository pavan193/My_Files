// filepath: c:\Users\saipa\My_Files\Docker_Deploy\dindex.js
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Docker!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// To run this script in a Docker container, you need to create a Dockerfile.
// Create a file named Dockerfile in the same directory with the following content:
// FROM node:14
// WORKDIR /usr/src/app
// COPY dindex.js .
// RUN npm install
// EXPOSE 3000
// CMD ["node", "dindex.js"]
// Then, build the Docker image using the command:
// docker build -t my-node-app .
// After building the image, you can run it with:
// docker run -p 3000:3000 my-node-app
// Your server should now be running and accessible at http://localhost:3000
// Make sure Docker is installed and running on your machine before executing these commands.
// You can also push this image to a Docker registry like Docker Hub or AWS ECR for deployment.
// To push to Docker Hub, you need to log in using `docker login`, tag your image with your Docker Hub username, and then push it:
// docker tag my-node-app your-dockerhub-username/my-node-app
// docker push your-dockerhub-username/my-node-app
// To run the image on any machine with Docker installed, you can pull it using:    
// docker pull your-dockerhub-username/my-node-app
// and then run it as shown above.