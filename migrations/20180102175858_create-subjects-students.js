exports.up = function(knex,Promise){
    return knex.schema.createTable("subjects",(subjects)=>{
        subjects.increments();
        subjects.string("name");
        subjects.timestamps(false,true);
    }).then(()=>{
        return knex.schema.createTable("students_subjects",(studentsSubjects)=>{
            studentsSubjects.increments();
            studentsSubjects.integer("student_id").unsigned();
            studentsSubjects.foreign("student_id").references("students.id");
            studentsSubjects.integer("subject_id").unsigned();
            studentsSubjects.foreign("subject_id").references("subjects.id");
        });
    });
}

exports.down = function(knex,Promise){
    return knex.schema.dropTable('students_subjects')
            .then(()=>knex.schema.dropTable('subjects'));
}