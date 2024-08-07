# # Use latest stable Node.js LTS base image
# FROM node:14

# # Create app directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json
# COPY package.json ./

# # Install app dependencies
# RUN npm install

# # Bundle app source
# COPY . .

# # Expose port
# EXPOSE 8000

# # Command to run the app
# CMD ["node", "server/js/main.js"]


# Use Node.js 10 LTS base image
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Copy package.json
COPY package.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port
EXPOSE 8000

# Command to run the app
 CMD ["node", "server/js/main.js"]
