# image
FROM node:lts-alpine

# Création du dossier de travaille
WORKDIR /usr/src/app

COPY ./ .

RUN npm install