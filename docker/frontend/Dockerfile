FROM node:20-slim 
RUN corepack enable

WORKDIR /app
COPY ./frontend/package.json ./frontend/pnpm-lock.yaml ./frontend/pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY ./frontend .

CMD pnpm run dev
