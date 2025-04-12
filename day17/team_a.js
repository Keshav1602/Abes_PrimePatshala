const sum = require('./team_b.js');


const profit= 100;
const expenses=20;

const revenue = sum(profit+expenses);

module.exports  = {
    profit,
    expenses,
    revenue
};


// const ans1 = sum();
// const ans2 = sum(1,2,4);
// const ans3 = sum(1,2,3,4,5);
// const ans4 = sum(99);
// const ans5 = sum(387248,47732);

// console.log(ans1,ans2,ans3,ans4,ans5);
