const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const {ProductRouter} = require ('./src/api/v1/products/routes/products-routes.js')
const {getProductsController} = require('./src/api/v1/products/controllers/products-controller.js')
const connectDb = require('./src/config/db.js');
const { authRouter } = require('./src/api/v1/auth/routes/authRoutes.js');
dotenv.config();

const app = express();
app.use(cors());


const PORT = process.env.PORT;
connectDb();
// // app level middleware
// app.use((req,res,next)=>{

// })

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/products',ProductRouter);
app.use('/api/v1/auth',authRouter);

app.get('/',(req,res)=>{
    res.send("!!!!!!");
})


app.listen(PORT,(err)=>{
    if(err) console.log(err);
    console.log(`running at http://localhost:${PORT}`);
})