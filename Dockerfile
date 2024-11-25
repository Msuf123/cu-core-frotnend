# Use the official Node.js image to install dependencies and build the app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm install -g @angular/cli
# Install the dependencies for the Angular app
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular app (this creates the dist folder with production files)
RUN npm run build
EXPOSE 4200
# Start Angular dev server and bind to all network interfaces
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
