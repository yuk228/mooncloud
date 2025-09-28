FROM node:20-slim 
RUN corepack enable

WORKDIR /app
COPY ./frontend /app

RUN pnpm install

CMD pnpm run dev
