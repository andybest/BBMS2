FROM node:16.15.0

WORKDIR /var/www/bbms

COPY package.json yarn.lock ./ 
RUN yarn --pure-lockfile

COPY .eslintrc.js nest-cli.json tsconfig.json tsconfig.build.json ./
COPY .env.docker /var/www/bbms/.env

CMD [ "yarn", "start:dev", "--preserveWatchOutput" ]