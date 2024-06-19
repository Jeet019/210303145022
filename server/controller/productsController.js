const Product = require('../models/product.model');

const getProducts = async (req, res) => {
  const { categoryname } = req.params;
  const n = parseInt(req.query.n) || 10;
  const page = parseInt(req.query.page) || 1;
  const sortBy = req.query.sort_by || 'rating';
  const order = req.query.order === 'asc' ? 1 : -1;
  const minPrice = parseFloat(req.query.min_price) || 0;
  const maxPrice = parseFloat(req.query.max_price) || Infinity;

  try {
    // Query MongoDB for products
    const query = {
      category: categoryname,
      price: { $gte: minPrice, $lte: maxPrice }
    };

    const totalCount = await Product.countDocuments(query);
    const products = await Product.find(query)
      .sort({ [sortBy]: order })
      .skip((page - 1) * n)
      .limit(n);

    res.json({
      total: totalCount,
      products
    });
  } catch (error) {
    console.error('Failed to fetch products', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

const getProductDetails = async (req, res) => {
  const { productid } = req.params;

  try {
    // Query MongoDB for product details by customId
    const product = await Product.findOne({ customId: productid });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Failed to fetch product details', error);
    res.status(500).json({ error: 'Failed to fetch product details' });
  }
};

module.exports = {
  getProducts,
  getProductDetails
};
