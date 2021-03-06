# pull official base image
FROM node:14.0.0

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY client/package.json ./
COPY client/package-lock.json ./
RUN npm install

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "run", "startboth"]