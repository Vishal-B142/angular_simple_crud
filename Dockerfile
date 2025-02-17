# Author: Vishal B
# pull official base image
#FROM node:14-alpine3.12 as build
FROM node:16.14.0-alpine3.14 as build

#working directory of containerized app
WORKDIR /app

#copy the react app to the container
COPY . /app/

#prepare the container for building react

#RUN npm cache clean --force

RUN npm install
RUN npm i bootstrap-icons
RUN npm i react-calendar
RUN npm install axios 
RUN npm install firebase  
RUN npm install --save react-router-dom
#RUN npm install sonar-scanner

# RUN npm install react-search-field --save
RUN npm run build

#prepare nginx

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

#fire for nginx
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]
