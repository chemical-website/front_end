# Use an official Node.js runtime as the base image
FROM node:18

WORKDIR /

COPY package*.json ./

RUN npm install


COPY . .

RUN npm run build

EXPOSE 80

CMD ["npm", "start"]
