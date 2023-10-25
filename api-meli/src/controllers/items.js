const axios = require('../axios');
const author = require('../utils/author');
const errors = require('../utils/errors');
const {
    getCategoryId,
    getFormattedProduct,
    getProductWithDescription,
} = require('../utils/functions');

const searchProducts = async (req, res) => {
    const searchTerm = req.query.q;
    if (!searchTerm) return res.status(400).json(errors.empty_query);

    try {
        const { data: productsResponse } = await axios.get(`/sites/MLA/search?q=${searchTerm}&limit=4`);
        const { filters, available_filters, results } = productsResponse;

        if (!results.length) return res.status(404).json(errors.not_found);

        let categories = [];

        if (filters.length) {
            const { path_from_root } = filters[0].values[0];
            categories = path_from_root.map((category) => category.name);
        } else {
            const categoryId = getCategoryId(available_filters);
            const { data } = await axios.get(`/categories/${categoryId}`);
            const { path_from_root } = data;
            categories = path_from_root.map((category) => category.name);
        }

        const items = results.map((item) => getFormattedProduct(item));
        const response = { author, categories, items };
        return res.json(response);
    } catch (error) {
        return res.status(500).json(errors.internal_error);
    }
};


const getProductDetails = async (req, res) => {
    const { id } = req.params;

    try {
        const { data: product } = await axios.get(`/items/${id}`);
        const { data: categoryData } = await axios.get(`/categories/${product.category_id}`);
        const { path_from_root } = categoryData;
        const categories = path_from_root.map((cat) => cat.name);

        let productDescription = {};
        try {
            const { data } = await axios.get(`/items/${id}/description`);
            productDescription = data;
        } catch (err) {
            productDescription = { plain_text: 'Producto sin descripción.' };
        }

        const itemWithDescription = getProductWithDescription(product, productDescription.plain_text);
        const response = { author, item: itemWithDescription, categories };
        return res.json(response);
    } catch (error) {
        if (error.message.endsWith('404')) {
            return res.status(404).json(errors.not_found);
        }
        return res.status(500).json(errors.internal_error);
    }
};

module.exports = { searchProducts, getProductDetails };
