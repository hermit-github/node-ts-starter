FROM node:20

RUN npm i pnpm -g

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 8080

CMD ["pnpm","start"]

