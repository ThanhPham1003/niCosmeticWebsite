# Name the node stage "builder"
FROM node:14-alpine AS builder
# Set working directory
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm run build

FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build .
# ENTRYPOINT ["nginx", "-g", "daemon off;"]
