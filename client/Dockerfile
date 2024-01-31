FROM node:lts-alpine

WORKDIR /usr/src/app/client

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Utilise le serveur HTTP simple fourni par Express pour servir les fichiers statiques
CMD ["npm", "start"]
