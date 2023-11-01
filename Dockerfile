FROM node:18-alpine
WORKDIR /app
COPY package*.json .
COPY ./apps/docker-app.js .
RUN npm install
CMD ["node", "docker-app.js"]
