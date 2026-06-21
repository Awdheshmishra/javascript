const products = [
    { id: 1, name: 'a', price: 4, categoryID: '1' },
    { id: 2, name: 'b', price: 5, categoryID: '2' },
    { id: 3, name: 'c', price: 8, categoryID: '3' },
    { id: 4, name: 'd', price: 9, categoryID: '1' },
    { id: 5, name: 'e', price: 2, categoryID: '2' },
    { id: 6, name: 'f', price: 9, categoryID: '3' },
    { id: 7, name: 'g', price: 5, categoryID: '1' },
    { id: 8, name: 'h', price: 3, categoryID: '2' },
    { id: 9, name: 'i', price: 2, categoryID: '3' },
    { id: 10, name: 'k', price: 4, categoryID: '1' }
];

const categories = [
    { id: 1, name: 'shirt' },
    { id: 2, name: 'pant' },
    { id: 3, name: 'kurta' }
];

const selectedCategories = ['shirt', 'kurta'];

// Find category IDs that belong to selected category names
const selectedCategoryIds = categories
    .filter(category => {
        return selectedCategories.includes(category.name);
    })
    .map(category => {
        return String(category.id);
    });

// Return products whose categoryID exists in selectedCategoryIds
const filteredProducts = products.filter(product => {
    return selectedCategoryIds.includes(product.categoryID);
});

console.log(filteredProducts);
