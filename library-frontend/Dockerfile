FROM node:18-alpine

WORKDIR /library-frontend/

COPY public/ /library-frontend/public
COPY src/ /library-frontend/src
COPY package.json /library-frontend/

RUN npm install react-router-dom

RUN npm install

CMD ["npm", "start"]