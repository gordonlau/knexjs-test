exports.up = function(knex,Promise){
    return knex.schema.createTable('teachers',(table)=>{
        table.increments();
        table.string("name");
        // The unique is necessary to guarantee it is a one-to-one relation.
        table.integer('class_id').unsigned().unique();
        table.foreign('class_id').references('classes.id');
        table.timestamps(false,true);
    });
}

exports.down = function(knex,Promise){
    return knex.schema.dropTable("teachers")
}