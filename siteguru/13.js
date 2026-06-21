const data = {
    store: 'Site Guru',
    catalog: {
        categories: [
            {
                categoryName: 'Electronics',
                items: [
                    {
                        id: 1,
                        name: 'Laptop',
                        variants: [
                            {
                                color: 'Silver',
                                stock: {
                                    warehouseA: 5,
                                    warehouseB: 0
                                }
                            },
                            {
                                color: 'Black',
                                stock: {
                                    warehouseA: 2,
                                    warehouseB: 7
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

// Navigate level by level to reach Black variant warehouseB stock
const blackLaptopStock =
    data.catalog
        .categories[0]
        .items[0]
        .variants[1]
        .stock
        .warehouseB;

console.log("Black Laptop Stock:", blackLaptopStock);

// Calculate total stock of Laptop across all variants and warehouses
const laptop = data.catalog.categories[0].items[0];

let totalStock = 0;

// Traverse all variants of laptop
laptop.variants.forEach(variant => {

    // Add stock from warehouseA
    totalStock += variant.stock.warehouseA;

    // Add stock from warehouseB
    totalStock += variant.stock.warehouseB;
});

console.log("Total Laptop Stock:", totalStock);