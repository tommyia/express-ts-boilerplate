# Use Node.js base image
FROM node:20-slim

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Expose port
EXPOSE 3000

# Run the dev server
CMD ["npm", "run", "dev"]
