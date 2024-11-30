# Use a lightweight Node.js LTS base image
FROM node:18-alpine

# Set a non-root user for running the app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json first to leverage caching
COPY package*.json ./

# Install dependencies as a non-root user
RUN npm ci --only=production && npm cache clean --force

# Copy the application code
COPY . .

# Change ownership of the application files
RUN chown -R appuser:appgroup /app

# Set environment variables for security
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Drop privileges to the non-root user
USER appuser

# Start the application
CMD ["node", "app.js"]

