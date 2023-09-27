# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /nodeapplication

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose a port (replace 3000 with your application's port if necessary)
EXPOSE 3000

# Define the command to run your application
CMD ["node", "app.js"]
