# image
FROM node:lts-alpine

# Création du dossier de travaille
WORKDIR app/

COPY package*.json ./
COPY ./server/package*.json server/
COPY ./client/package*.json client/

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]