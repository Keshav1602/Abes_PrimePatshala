// const validateCreateProductDto = (req,res,next)=>{
//     const {title,price,description,stock} = req.body
//     if(!title || !price){
//         return res.status(400).send({
//             status: "failed",
//             message: "title and price are required"
//         })
//     }
//     if(typeof title !== 'string' || title.length < 3){
//         return res.status(400).send({
//             status: "failed",
//             message: "title must be a string and length of title must be greater than 3"
//         })
//     }
//     price = Number(price);
//     if(typeof price !== 'number' || price <= 0){
//         return res.status(400).send({
//             status: "failed",
//             message: "price must be a number and greater than 0"
//         })
//     }
//     next();
// }

const validateCreateProductDto = (req, res, next) => {
    try {
        const { title, price, description, stock } = req.body;

        if (!title || !price) {
            throw new Error("title and price are required");
        }

        if (typeof title !== 'string' || title.length < 3) {
            throw new Error("title must be a string and length of title must be greater than 3");
        }

        const numericPrice = Number(price);
        if (isNaN(numericPrice) || numericPrice <= 0) {
            throw new Error("price must be a number and greater than 0");
        }

        next(); // Proceed to the next middleware or controller
    } catch (err) {
        res.status(400).send({
            status: "failed",
            message: err.message,
        });
    }
};

module.exports = validateCreateProductDto;
