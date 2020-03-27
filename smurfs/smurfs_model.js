const db= require('../config/db_config');

module.exports= {
  find,
  add,
  remove
}

function find(){
  return db('smurfs').select('id', 'name');
}//end find

function findById(id){
  return db('smurfs').where({id}).select('id', 'name').first()
}//end findById

async function add(smurfData){
  const [id]= await db('smurfs').insert(smurfData)
  return findById(id);
}//end add

async function remove(id){
  return db('smurfs')
  .select('id')
  .where({id: id }).del(id);

}//end remove