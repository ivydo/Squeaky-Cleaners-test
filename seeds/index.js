const seedUsers = require('./user-seeds');
const seedReviews = require('./review-seeds');
const seedMaids = require('./maid-seeds');

const sequelize = require('../config/connection');


//do not alter order seedReviews() must go last due to dependencies on seedMaids()
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    
    await seedUsers();
    console.log('--------------');

    await seedMaids();
    console.log('--------------');

    await seedReviews();
    console.log('--------------');

    process.exit(0);
};

seedAll();