const db= require('../config/db_config');

module.exports= {
  find,
  add,
  remove
}

function find(){
  return db('smurfs').select('id', 'name');
}//end find

function add(smurfData){
  return db('smurfs').insert(smurfData, 'id');
}//end add

function remove(id){
  return db('smurfs').where({id: id}).del(id);
}//end remove