//2
const users = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Jane', age: 17 },
    { id: 3, name: 'Mike', age: 25 }
];

// Keep only users whose age is 18 or above
const adults = users.filter(user => {
    return user.age >= 18;
});

console.log(adults);

//3
const nums = [1, 2, 3, 4, 5];

// Create a new array where each number is doubled
const doubledNumbers = nums.map(num => {
    return num * 2;
});

console.log(doubledNumbers);

//4
const users = [
    { id: 1, city: 'Delhi' },
    { id: 2, city: 'Mumbai' },
    { id: 3, city: 'Delhi' },
    { id: 4, city: 'Lucknow' },
    { id: 5, city: 'Mumbai' }
];

// Build an object containing city-wise user count
const cityCount = users.reduce((result, user) => {

    // If city does not exist, initialize count with 0
    if (!result[user.city]) {
        result[user.city] = 0;
    }

    // Increase count for current city
    result[user.city]++;

    return result;
}, {});

console.log(cityCount);

//5
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


//8
const employees = [
    { id: 1, name: 'A', salary: 10000 },
    { id: 2, name: 'B', salary: 25000 },
    { id: 3, name: 'C', salary: 18000 },
    { id: 4, name: 'D', salary: 35000 }
];

// Keep only employees whose salary is greater than 15000
const filteredEmployees = employees.filter(employee => {
    return employee.salary > 15000;
});

// Sort employees in descending order of salary
filteredEmployees.sort((a, b) => {
    return b.salary - a.salary;
});

console.log(filteredEmployees);

//9
const company = {
    name: 'Site Guru',
    departments: [
        {
            name: 'Engineering',
            teams: [
                {
                    teamName: 'Frontend',
                    members: [
                        { id: 1, name: 'Asha', skills: ['Vue', 'JavaScript', 'CSS'] },
                        { id: 2, name: 'Ravi', skills: ['React', 'JavaScript'] }
                    ]
                },
                {
                    teamName: 'Backend',
                    members: [
                        { id: 3, name: 'Neha', skills: ['Node', 'MySQL', 'Vue'] }
                    ]
                }
            ]
        },
        {
            name: 'Design',
            teams: [
                {
                    teamName: 'UI',
                    members: [
                        { id: 4, name: 'Karan', skills: ['Figma', 'CSS'] }
                    ]
                }
            ]
        }
    ]
};

const vueDevelopers = [];

// Traverse all departments
company.departments.forEach(department => {

    // Traverse all teams inside department
    department.teams.forEach(team => {

        // Traverse all members inside team
        team.members.forEach(member => {

            // Check whether member knows Vue
            if (member.skills.includes('Vue')) {
                vueDevelopers.push(member.name);
            }

        });

    });

});

console.log(vueDevelopers);

//10
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

//11
const students = [
    {
        name: 'Asha',
        subjects: [
            { subject: 'Math', marks: 80 },
            { subject: 'Science', marks: 90 }
        ]
    },
    {
        name: 'Ravi',
        subjects: [
            { subject: 'Math', marks: 60 },
            { subject: 'Science', marks: 70 }
        ]
    },
    {
        name: 'Neha',
        subjects: [
            { subject: 'Math', marks: 95 },
            { subject: 'Science', marks: 85 }
        ]
    }
];

const studentReport = students.map(student => {

    // Sum all subject marks
    const total = student.subjects.reduce((sum, subject) => {
        return sum + subject.marks;
    }, 0);

    // Calculate average marks
    const average = total / student.subjects.length;

    return {
        name: student.name,
        total,
        average
    };
});

// Find student having maximum total marks
const topper = studentReport.reduce((bestStudent, currentStudent) => {
    return currentStudent.total > bestStudent.total
        ? currentStudent
        : bestStudent;
});

console.log(studentReport);
console.log("Topper:", topper.name);

//12
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

//13
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