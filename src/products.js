import faker from "faker";


const getProducts = (number) => {
    let listOfProducts = [];
    while (listOfProducts.length < number) {

        const fakeProduct = {
            name: faker.commerce.productName(),
            color: faker.commerce.color(),
            price: faker.commerce.price(),
            department: faker.commerce.department()
        }
        listOfProducts.push(fakeProduct);
    }
        console.log(listOfProducts);

}
console.log(getProducts(10));

export default getProducts();


