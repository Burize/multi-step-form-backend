## REST SERVER FOR MULTI STEP FORM 

Rest server, that store  options(and created domains) for frontend client that provide opportunity creating domain configuration.  

### Used features

- [NestJS](https://github.com/nestjs/nest) as framework for building server-side applications;
- Typescript;
- [MongoDB](https://www.mongodb.com/) for storing configurations.


### Project launch
At that moment, there is no docker, so you need run a series of commands to load the dump MongoDB before starting the server. Also, you  must have an installed MongoDB on your machine.

```bash
# create local folder for data base 
$ mkdir dataBase

# restore data from dump
$ mongorestore dump

# run mongo at restored dump
$  mongod --port 27017 --dbpath=./dataBase
```


### NPM scripts

- ```npm run start``` for development environment
- ```npm run start:dev``` for development environment in watch mode
- ```npm run start:prod``` for production environment in watch mode

#### TODO
- [ ] add docker for local build and run mongoDB instance.