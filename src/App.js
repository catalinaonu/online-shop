import React, {useState} from 'react';
import getProduct from './utils/getProducts'
import filterByDepartments from "./utils/filterByDepartments";

import Store from "./Store/Store";

import 'antd/dist/antd.css';
import Product from "./Store/Product";
import ShoppingList from "./ShoppingList";


const products = getProduct(500);
// console.log(products);

const productsByDepartment = filterByDepartments(products);

// console.log(productsByDepartment);

function App() {
    const [shoppingList, setShoppingList] = useState([]);

    const handelClick = (product) => {
        console.log(product);
        setShoppingList([...shoppingList, product])
    };

    return (
        <div className="App">
            <Store productsByDepartment={productsByDepartment} onProductClick={handelClick}/>
            <ShoppingList shoppingList={shoppingList}/>
        </div>
    );
}

export default App;
