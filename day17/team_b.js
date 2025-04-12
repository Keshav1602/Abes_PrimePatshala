const obj=require("./team_a.js");

console.log(`Our current
                revenue is ${obj.revenue}$
                with ${obj.profit}$ profit`
            );



// let count =0 ;


const sum = (...arr) =>{
    // count++;
    // console.log(count);
    const ans  = arr.reduce((acc, curr)=> acc+curr, 0);
    return ans;
}

module.exports = sum ;