# Specify the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose the port on which the server will run
EXPOSE 8080

# Start the server
CMD ["npm", "start"]
