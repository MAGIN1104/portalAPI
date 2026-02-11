FROM node:20-alpine AS builder
WORKDIR /app

# Copy monorepo files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/portal ./apps/portal
COPY apps/admin ./apps/admin
COPY packages/ui ./packages/ui

# Install pnpm and dependencies
RUN npm install -g pnpm
RUN pnpm install

# Build the portal app
RUN pnpm build --filter @fie-api/portal

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy built app
COPY --from=builder /app/apps/portal/.next/standalone ./
COPY --from=builder /app/apps/portal/.next/static ./.next/static
COPY --from=builder /app/apps/portal/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
