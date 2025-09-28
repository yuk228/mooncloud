FROM node:20-slim 
RUN corepack enable

WORKDIR /app
COPY ./frontend/pnpm-lock.yaml ./frontend/package.json ./frontend/pnpm-workspace.yaml* ./
RUN pnpm install --frozen-lockfile

COPY ./frontend ./app

CMD pnpm run dev
