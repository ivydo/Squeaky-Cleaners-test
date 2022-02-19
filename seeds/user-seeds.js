const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        //1
        username: 'jsmith',
        email: 'jsmith@gmail.com',
        password: 'password123'
    },
    {
        //2
        username: 'jwilloughway1',
        email: 'rmebes1@sogou.com',
        password: 'password123'
    },
    {
        //3
        username: 'jdoe',
        email: 'jdoe@gmail.com',
        password: 'password123'
    },
    {
        //4
        username: 'ivydo',
        email: 'ivydo@none.com',
        password: 'password123'
    },
    {
        //5
        username: 'hstamper',
        email: 'hstamper@none.com',
        password: 'password123'
    },
    {
        //6
        username: 'github',
        email: 'github@test.com',
        password: 'password123'
    },
    {
        //7
        username: 'jquery',
        email: 'jquery@test.com',
        password: 'password123'
    },
    ,
    {
        //8
        username: 'bulma',
        email: 'bulma@test.com',
        password: 'password123'
    },
    {
        //9
        username: 'react',
        email: 'react@test.com',
        password: 'password123'
    },
    {
        //10
        username: 'LunaBug',
        email: 'lunabug@test.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;