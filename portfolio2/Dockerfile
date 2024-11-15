# Use a Node.js base image for the build stage
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Use a minimal Node.js image for the serve stage
FROM node:18 AS serve

# Set the working directory for the serve stage
WORKDIR /app

# Copy the built files from the build stage
COPY --from=build /app/build /app/build

# Install serve globally
RUN npm install -g serve

# Expose the port your app runs on
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]
