
exports.up = function(knex) {
  return knex.schema.createTable('smurfs', tbl => {
    tbl.increments();

    tbl.string('name')
      .index()
      .unique();
  })//end smurfs table
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('smurfs');
};
