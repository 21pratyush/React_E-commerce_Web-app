# Base image with Node.js
FROM node:18.9.0-alpine as build

# Working directory in the container
WORKDIR /app

# Copying package.json and package-lock.json to the container
COPY package*.json ./

# Installing project dependencies
RUN npm install

# Copying the rest of the application files to the container
COPY . .

# Building the React app
RUN npm run build

# Base Nginx image
FROM nginx:alpine

# Copying the built app from the previous stage to the Nginx image
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the React app
EXPOSE 80

# Starting Nginx server
CMD ["nginx", "-g", "daemon off;"]
