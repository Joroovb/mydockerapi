FROM node:16-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY index.js ./
CMD ["npm", "run", "start"]
EXPOSE 4321