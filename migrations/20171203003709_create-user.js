
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('users',(table)=>{
        table.increments();
        table.string('name');
        table.string('email');
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
