exports.up = function(knex,Promise){
    return knex.schema.createTable('classes',(table)=>{
        table.increments();
        table.string("name");
        table.string("classroom");
        table.string("period");
        table.timestamps(false,true);
    });
}

exports.down = function(knex,Promise){
    return knex.schema.dropTable("classes")
}