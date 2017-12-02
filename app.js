const knexfile = require('./knexfile')[process.env.NODE_ENV || 'development' ]
const knex = require('knex')(knexfile)

knex.insert({'name':'john.doe',
            'email':'john.doe@gmail.com',
            'created_at':new Date(),
            'updated_at':new Date()}).into('users').then(()=>{
    knex.select('*').from('users').then((users)=>{
        users.forEach((user)=>{
            console.log(user.name)
        });
    })
});