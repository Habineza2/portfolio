# Use the official Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your React app's code into the container
COPY . .

# Expose the port that your React app runs on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
