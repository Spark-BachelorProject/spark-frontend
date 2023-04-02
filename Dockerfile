FROM node:18.15

ENV HOST 0.0.0.0

RUN ulimit -n 524288

WORKDIR /spark-frontend
COPY . .
RUN npm install
EXPOSE 5173
EXPOSE 3000

CMD [ "npm", "run", "dev", "--", "--host" ]