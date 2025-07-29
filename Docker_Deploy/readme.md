
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

// sudo apt update && sudo apt upgrade -y
// sudo apt install docker.io -y
// sudo apt install git
// sudo systemctl start docker
// sudo systemctl enable docker
// sudo usermod -aG docker $USER
// sudo apt install git -y
// git clone https://github.com/yourusername/yourapp.git
// cd yourapp
// # Use official Node image
// FROM node:18

// # Set working directory
// WORKDIR /app

// # Copy package files
// COPY package*.json ./

// # Install dependencies
// RUN npm install

// # Copy app source
// COPY . .

// # Expose the app port
// EXPOSE 3000

// # Run the app
// CMD ["node", "index.js"]
// docker build -t myapp .
// docker run -p 3000:3000 -it myapp
