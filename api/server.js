const express= require('express');
const server= express();
const helmet= require('helmet');
const cors= require('cors');


server.use(cors());
server.use(helmet());
server.use(express.json());

//define routers
const smurfsRouter= require('../smurfs/smurfsRouter');

//assign routers
server.use('/api/smurfs', smurfsRouter);

//root route
server.get('/', (req, res) => {
  res.status(200).json("<h1>Welcome to my humble server!</h1>");
});

//fallback
server.use(function notFound(req, res){
  res.status(404).json({error: "Could not find what you are looking for"});
});

module.exports= server;