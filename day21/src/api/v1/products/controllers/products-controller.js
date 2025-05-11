const Product = require("../../../../models/product-schema");

const getProductsController = async (req, res) => {
  try {
    const { page = 1, limit = 6, q = "" } = req.query;
    const pageNumber = parseInt(page) || 1;
    const limitNumber = parseInt(limit) || 6;

    // Search query with regex for title, description, and tags
    const query = {
      $or: [
        { title: { $regex: q, $options: "i" } },
        // { description: { $regex: q, $options: "i" } },
        // { tags: { $regex: q, $options: "i" } }
      ],
    };

    // Get total number of matching products
    const totalProducts = await Product.countDocuments(query);

    // Calculate total pages
    const totalPages = Math.ceil(totalProducts / limitNumber);

    // Fetch products with pagination
    const products = await Product.find(query)
      .sort("_id")
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);
    
    await new Promise((res,rej)=>{
      setTimeout(()=>{
        res()},2000)
      })

      
    res.send({
      status: "success",
      data: {
        products: products,
        page: pageNumber,
        limit: limitNumber,
        totalProducts: totalProducts,
        totalPages: totalPages,
        query: q,
      },
    });
  } catch (err) {
    res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
};

const postProductsController = async (req, res) => {
  try {
    const { title, price, description, stock } = req.body;

    const newProduct = await Product.create({
      title,
      price,
      description: description || "no description",
      stock: stock || 0,
    });
    res.send({
      status: "created",
      data: {
        products: newProduct,
      },
    });
  } catch (err) {
    res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
};

const updateProductsController = async (req, res) => {
  try {
    const { title, price, description, stock } = req.body;
    const { id } = req.params;
    const newProduct = await Product.findByIdAndUpdate(id, {
      title,
      price,
      description: description || "no description",
      stock: stock || 0,
    });
    res.send({
      status: "updated",
      data: {
        products: newProduct,
      },
    });
  } catch (err) {
    res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
};

const deleteProductsController = async (req, res) => {
  try {
    const { id } = req.params;
    const newProduct = await Product.findByIdAndDelete(id);
    res.send({
      status: "deleted",
      data: {
        products: newProduct,
      },
    });
  } catch (err) {
    res.status(500).send({
      status: "failed",
      message: err.message,
    });
  }
};
module.exports = {
  getProductsController,
  postProductsController,
  updateProductsController,
  deleteProductsController,
};
