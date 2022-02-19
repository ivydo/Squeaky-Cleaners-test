//const sequelize = require('../config/connection');
const { Review } = require('../models');

const reviewdata = [
    {
        //1
        title: 'Happiness from cleaning',
        review_text: 'The objective of cleaning is not just to clean, but to feel happiness living within that environment.',
        user_id: 1,
        maid_id: 1
    },
    {
        //2
        title: 'Cleanliness',
        review_text: 'Nothing inspires cleanliness more than an unexpected guest.',
        user_id: 2,
        maid_id: 2
    },
    {
        //3
        title: 'Dreams of a Clean House',
        review_text: 'We dream of having a clean house — but who dreams of actually doing the cleaning?',
        user_id: 3,
        maid_id: 9
    },
    {
        //4
        title: 'No Secrets',
        review_text: 'I make no secret of the fact that I would rather lie on a sofa than sweep beneath it.',
        user_id: 4,
        maid_id: 6
    },
    {
        //5
        title: 'Cleaning can kill',
        review_text: "Housework can't kill you, but why take the chance?",
        user_id: 5,
        maid_id: 3
    },
    {
        //6
        title: 'Excellent Cleaning',
        review_text: 'The quality of cleaning is excellent. They are dependable. ',
        user_id: 1,
        maid_id: 1
    },
    {
        //7
        title: 'Professional Cleaning',
        review_text: "They are efficient, professional, and affordable. Thanks to all!",
        user_id: 2,
        maid_id: 2
    },
    {
        //8
        title: 'Thorough Cleaning',
        review_text: "They are very thorough and always ask if there is anything else they can do",
        user_id: 3,
        maid_id: 9
    },
    {
        //9
        title: 'Outstanding Service',
        review_text: "The service was outstanding, exceptional, reliable, dependable, and extremely professional.",
        user_id: 4,
        maid_id: 6
    },
    {
        //10
        title: 'Diligent worker',
        review_text: "Daryl worked diligently and continually asked questions to clarify what I wanted..",
        user_id: 5,
        maid_id: 3
    },
    {
        //11
        title: 'convenience extrdanaire',
        review_text: ' they came by on relatively short notice, and on a holiday, no less. This is an excellent cleaning service and customer service!  ',
        user_id: 1,
        maid_id: 1
    },
    {
        //12
        title: 'Great idea including housekeeping in the rent',
        review_text: "The cleaning itself was very, very thorough; hardwood floors are gleaming clean by the time she is done! ",
        user_id: 2,
        maid_id: 9
    },
    {
        //13
        title: 'Never leaving this complex',
        review_text: "Great job with kitchen (fridge or oven upon request, but they did some dishes I accidentally left in the sink, and took out the trash!), bathroom, floors (moved all the furniture), ",
        user_id: 3,
        maid_id: 2
    },
    {
        //14
        title: 'Great cleaning and availability',
        review_text: "hey did a wonderful job of vaccuuming, cleaning the bathrooms and kitchen, making the bed, everything. There were a few sneaky corners with cobwebs missed, ",
        user_id: 4,
        maid_id: 6
    },
    {
        //15
        title: 'so nice to come home and sparkling clean',
        review_text: " They bring everything they need and when they leave the house sparkles--baseboards, window sills, everything.  also exceeded my expectations by airing out the rugs and doormat",
        user_id: 5,
        maid_id: 3
    },
    {
        //16
        title: 'Fantastic Harry',
        review_text: "Harry do a such a fantastic job! We are thrilled to have him be our regular maid. We like him so much that my family moving to town will make him their regulars too!",
        user_id: 6,
        maid_id: 4
    },
    {
        //17
        title: 'Great cleaning and availability',
        review_text: "I continue to be impressed with the level of professionalism and dedication she brings to my home. Another GREAT experience!",
        user_id: 7,
        maid_id: 5
    },
    {
        //18
        title: 'Amazingly ontime and clean',
        review_text: "It was a terrific experience! Did a wonderful job. Courteous, professional, thorough, and prompt. I will definitely use their service again!! Thanks so much.",
        user_id: 8,
        maid_id: 7
    },
    {
        //19
        title: 'Amazinging attention to detail',
        review_text: "Patrick is absolutely fantastic! He is responsible, professional, personable, and does stellar work! His prices are reasonable and we are thrilled with him and his work.",
        user_id: 9,
        maid_id: 8
    },
    {
        //20
        title: 'I became a regular',
        review_text: "Very happy with my first service. We did a deep clean this time and will start doing a premium every 2 weeks.",
        user_id: 10,
        maid_id: 10
    }
    //template below copy/paste
    //,
    // {
    //     21
    //     title: '',
    //     review_text: "",
    //     user_id: ,
    //     maid_id: 
    // }
    
];

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;