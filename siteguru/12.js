const products = [
    { id: 1, name: 'Shirt', category: 'Clothing' },
    { id: 2, name: 'Apple', category: 'Food' },
    { id: 3, name: 'Pant', category: 'Clothing' },
    { id: 4, name: 'Bread', category: 'Food' },
    { id: 5, name: 'Watch', category: 'Accessories' }
];

// Group products by category
const groupedProducts = products.reduce((result, product) => {

    // Create category key if it does not exist
    if (!result[product.category]) {
        result[product.category] = [];
    }

    // Push product name into category array
    result[product.category].push(product.name);

    return result;

}, {});

console.log(groupedProducts);
