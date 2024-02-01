# image
FROM node:lts-alpine

# Création du dossier de travaille
WORKDIR server/

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]