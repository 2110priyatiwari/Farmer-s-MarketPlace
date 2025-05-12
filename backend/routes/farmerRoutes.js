const express = require('express');
const router = express.Router();
// const Farmer = require('./Farmer'); // your model
const Farmer = require('../models/Farmer');

const upload = require('../middlewares/upload');  // ✅ Add this
const Product = require('../models/Product');

// router.get('/products', (req, res) => {
//     res.send('GET route for /products is working');
// });

// // Test Route
// router.get('/test', (req, res) => {
//     res.send('Test route is working');
//   });
  
// POST route to add a farmer
router.post('/add', async (req, res) => {
    try {
        const farmer = new Farmer(req.body);
        await farmer.save();
        res.status(201).json({ message: 'Farmer registered successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});


// ✅ New route: List a product (with images)
router.post('/products', upload.array('photos', 5), async (req, res) => {
    try {
        console.log('BODY:', req.body);
        console.log('FILES:', req.files);

        const { category, product, price, sellerName, mobile, address } = req.body;
        const photos = req.files.map(file => file.filename);

        const newProduct = new Product({
            category,
            product,
            price,
            sellerName,
            mobile,
            address,
            photos
        });

        await newProduct.save();
        res.status(201).json({ message: 'Product listed successfully!' });
    } catch (error) {
        console.error('Error in /products:', error);
        res.status(500).json({ message: 'Failed to list product', error: error.message });
    }
});

// Modified route for fetching products
router.get('/products', async (req, res) => {
    const query = req.query.query?.toLowerCase() || '';  // Get the query parameter
    try {
        const products = await Product.find({
            $or: [
                { product: { $regex: query, $options: 'i' } }, // Case-insensitive search on product name
                { category: { $regex: query, $options: 'i' } }  // Case-insensitive search on category
            ]
        // }).populate('sellerId', 'name address mobile'); // 👈 fetch only specific fields;
        });
        res.json(products);  // Return the matching products
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products' });  // Return an error message if something fails
    }
});





module.exports = router;

// router.get('/test', (req, res) => {
//     res.send('Test route is working');
//   });
  
