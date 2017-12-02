
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("groups",(table)=>{
        table.increments();
        table.string('name');
        table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('groups');
};
