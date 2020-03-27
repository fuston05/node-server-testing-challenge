const request= require('supertest');
const server= require('../api/server');
const db= require('../config/db_config');

describe('smurfs api', function(){
  beforeEach(async () => {
    await db('smurfs').truncate();
  });
  
  it('.returns a status 200', function(){
    return request(server).get('/')
    .then(res => {
      expect(res.status).toBe(200);
    });
  });

  describe('The get() endpoint', function(){
  
      it('.returns a status 200', function(){
        return request(server).get('/api/smurfs')
        .expect(200)
      });

    it('.returns an array', function(){
      return request(server)
      .get('/api/smurfs')
      .then(res => {
        expect(res.body).toEqual(expect.arrayContaining([]));
      })
    });

    it('.returns content type json', function(){
      return request(server).get('/api/smurfs')
      .expect('Content-Type', /json/);
    });

  })//end get

  describe('The add() endpoint', function(){
    
    it('.returns an object', function(){
      return request(server)
      .post('/api/smurfs')
      .set('Content-Type', 'application/json')
      .send({"name": "testy Smurf"})
      .then(res => {
        expect(res.body).toHaveProperty('name')
      })
    });

    it('.returns a status 201', function(){
      return request(server)
      .post('/api/smurfs')
      .set('Content-Type', 'application/json')
      .send({"name": "testy Smurf"})
      .expect(201);
    });

    it('.returns content type json', function(){
      return request(server)
      .post('/api/smurfs')
      .set('Content-Type', 'application/json')
      .send({"name": "testy Smurf"})
      .expect('Content-Type', /json/);
    });
  })//end add

  describe('The delete() endpoint', function(){
    beforeEach(async () => {
      await db('smurfs').truncate();
    });

    it('.returns an object', function(){
      return request(server)
      .post('/api/smurfs')
      .set('Content-Type', 'application/json')
      .send({"name": "testy Smurf"})
      .then(res => {
        return request(server)
        .delete(`/api/smurfs/${res.body.id}`)
        .set('Content-Type', 'application/json')
        .then(res1 => {
          expect(res1.body).toBe(1)
        })
      })

    });

    it('.returns a status 200', function(){
      return request(server)
      .post('/api/smurfs')
      .set('Content-Type', 'application/json')
      .send({"name": "testy Smurf"})
      .then(res => {
        return request(server)
        .delete(`/api/smurfs/${res.body.id}`)
        .set('Content-Type', 'application/json')
        .expect(200)
      })
    });

    it('.returns content type json', function(){
      return request(server)
      .post('/api/smurfs')
      .set('Content-Type', 'application/json')
      .send({"name": "testy Smurf"})
      .then(res => {
        return request(server)
        .delete(`/api/smurfs/${res.body.id}`)
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
      });
    });
  })//end delete

});//end smurfs