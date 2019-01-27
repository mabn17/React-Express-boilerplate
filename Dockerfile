# Does not work with version 1.0.0
FROM mhart/alpine-node:11.7 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --prod

# And then copy over node_modules, etc from that stage to the smaller base image
FROM mhart/alpine-node:11.7

WORKDIR /app

COPY --from=0 /app .

COPY . .
# EXPOSE 3000

CMD yarn start