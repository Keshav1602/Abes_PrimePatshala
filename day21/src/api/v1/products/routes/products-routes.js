const express = require('express');



const ProductRouter = express.Router();
const {getProductsController,postProductsController, updateProductsController, deleteProductsController} = require('../controllers/products-controller.js');
const validateCreateProductDto = require('../dto/validateCreateProductDto.js');



ProductRouter.get('/',getProductsController);
ProductRouter.post('/',validateCreateProductDto,postProductsController);
ProductRouter.put('/:id',updateProductsController);
ProductRouter.delete('/:id',deleteProductsController)

module.exports = {
    ProductRouter,
}