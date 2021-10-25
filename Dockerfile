FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./
COPY root-config/package.json ./root-config/
COPY react-single/package.json ./react-single/
COPY angular-mfe/package.json ./angular-mfe/

RUN yarn install --network-timeout 1000000

# COPY ./ /usr/src/app
# RUN yarn bootstrap

EXPOSE 4200
EXPOSE 9000
EXPOSE 8500
EXPOSE 3000

# CMD ["yarn", "start"]
