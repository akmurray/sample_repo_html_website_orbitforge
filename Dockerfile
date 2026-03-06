FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY public ./public
COPY scripts ./scripts
COPY src ./src
COPY data ./data
EXPOSE 4173
CMD ["node", "scripts/serve.js"]
