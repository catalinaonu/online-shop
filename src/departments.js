
const filterByDepartments = (products) => {
    let productsByDepartment = {}
        products.forEach(product => {
            product.department in productsByDepartment ? productsByDepartment[product.department].push(product) : productsByDepartment[product.department] = Array.of(product)
        }
    );
    return productsByDepartment
}

export default filterByDepartments;

