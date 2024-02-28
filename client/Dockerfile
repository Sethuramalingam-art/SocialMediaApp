FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --f

COPY . .

EXPOSE 5200

CMD ["npm", "start"]