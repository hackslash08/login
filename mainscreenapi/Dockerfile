FROM node:8.6.0

RUN mkdir -p /app/server

COPY . /app/server

RUN cd /app/server && npm install

WORKDIR /app/server

EXPOSE 3030

CMD ["node", "server.js"]