exports.up = function(knex,Promise){
    return knex.schema.createTable('students',(table)=>{
        table.increments();
        table.string("name");
        //No unique is necessary because it is a one-to-many relation.
        table.integer('class_id').unsigned();
        table.foreign('class_id').references('classes.id');
        table.timestamps(false,true);
    });
}

exports.down = function(knex,Promise){
    return knex.schema.dropTable("students")
}