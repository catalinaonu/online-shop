import faker from 'faker';

const getProducts = (number) => {
    let listOfProducts = [];
    while (listOfProducts.length < number) {
        const fakeProduct = {
            id: faker.random.uuid(),
            name: faker.commerce.productName(),
            color: faker.commerce.color(),
            price: faker.commerce.price(),
            department: faker.commerce.department()
        }
        listOfProducts.push(fakeProduct);
    }
    return listOfProducts;
}

export default getProducts;


/*export const getProducts = (count) => Array.from({length: count}).map((_el, _index) => ({
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    color: faker.commerce.color(),
    price: faker.commerce.price(),
    department: faker.commerce.department()
}))*/