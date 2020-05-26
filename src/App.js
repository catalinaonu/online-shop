import React from 'react';
import getProduct from './getProducts'
import filterByDepartments from "./filterByDepartments";
import ShopDepartments from "./ShopDepartments";

import 'antd/dist/antd.css';

const products = getProduct(500);
// console.log(products);

const productsByDepartment = filterByDepartments(products);
// console.log(productsByDepartment);

function App() {
    return (
        < div className="App">
            <ShopDepartments productsByDepartment={productsByDepartment}/>
        </div>
    );
}

export default App;
