const users = [
    { id: 1, name: 'Asha' },
    { id: 2, name: 'Ravi' },
    { id: 3, name: 'Neha' }
];

const products = [
    { id: 101, title: 'Keyboard', price: 800 },
    { id: 102, title: 'Mouse', price: 400 },
    { id: 103, title: 'Monitor', price: 9000 }
];

const orders = [
    { orderId: 1, userId: 1, productId: 102, qty: 2 },
    { orderId: 2, userId: 3, productId: 101, qty: 1 },
    { orderId: 3, userId: 1, productId: 103, qty: 1 }
];

const result = orders.map(order => {

    // Find user matching current order
    const user = users.find(user => {
        return user.id === order.userId;
    });

    // Find product matching current order
    const product = products.find(product => {
        return product.id === order.productId;
    });

    return {
        userName: user.name,
        productTitle: product.title,

        // Calculate total amount
        totalAmount: product.price * order.qty
    };
});

console.log(result);
