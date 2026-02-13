FROM node:20-alpine
WORKDIR /app

COPY .next/standalone/apps/admin/ ./
COPY .next/static ./.next/static
COPY public ./public
COPY package.json ./
COPY package-lock.json ./
COPY next.config.ts ./
COPY packages/ui ./packages/ui

ENV NODE_ENV=production
ENV PORT=3000

RUN npm install --production

EXPOSE 3000
CMD ["node", "server.js"]