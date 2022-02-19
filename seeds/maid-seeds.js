//const sequelize = require('../config/connection');
const { Maid } = require('../models');

const maiddata = [
    {
        //1
        name: 'Bubbly Brenda',
        review_id: [1, 6, 11]
    },
    {
        //2
        name: 'Cleaning Cindy',
        review_id: [2, 7, 13]
    },
    {
        //3
        name:'Dust-Away Daryl',
        review_id: [5, 10, 15]
    },
    {
        //4
        name:'Hoover Harry',
        review_id: [16]
    },
    {
        //5
        name:'Immaculate Irene',
        review_id: [17]
    },
    {
        //6
        name: 'Mopping Mary',
        review_id: [4, 9, 14]
    },
    {
        //7
        name: 'Neat Nancy',
        review_id: [18]
    },
    {
        //8
        name:'Polishing Patrick',
        review_id: [19]
    },
    {
        //9
        name: 'Squeaky-Clean Sarah',
        review_id: [3, 8, 12]
    },
    {
        //10
        name: 'Washing Wanda',
        review_id: [20]
    }
    

];

const seedMaids = () => Maid.bulkCreate(maiddata);

module.exports = seedMaids;