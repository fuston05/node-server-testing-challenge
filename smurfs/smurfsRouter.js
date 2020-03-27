const express= require('express');
const router= express.Router();
const smurfs= require('./smurfs_model');

//get all smurfs
router.get('/', (req, res) => {
  smurfs.find()
  .then( smurfs => {
    res.status(200).json(smurfs)
  })
  .catch(error => {
    res.status(500).json({error: "Could not process your request"})
  })
});//end get all smurfs

//add a new smurf
router.post('/', (req, res) => {
  const smurfData= req.body;
  smurfs.add(smurfData)
  .then( smurf => {
    res.status(201).json(smurf)
  })
  .catch(error => {
    res.status(500).json({error: "Could not process your request"})
  })
});//end add new smurf

//delete a smurf
router.delete('/:id', (req, res) => {
  const smurfId= parseInt(req.params.id);
  smurfs.remove(smurfId)
  .then( delSmurf => {
    res.status(200).json(delSmurf)
  })
  .catch(error => {
    res.status(500).json({error: "Could not process your request"})
  })
});//delete a smurf


module.exports= router;