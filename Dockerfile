# Stage 1: Define the base image.
# We're starting with an official, lightweight version of the Nginx web server.
FROM nginx:alpine

# Stage 2: Copy project files.
# This copies all the files from our project folder (the first '.') 
# into the folder where Nginx serves its default website (`/usr/share/nginx/html`).
COPY . /usr/share/nginx/html

# Stage 3: Expose the port.
# This tells Docker that the container will listen on port 80, which is the default for HTTP traffic.
EXPOSE 80