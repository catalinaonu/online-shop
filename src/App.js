import React, {useState} from 'react';
import getProduct from './utils/getProducts'
import filterByDepartments from "./utils/filterByDepartments";

import Store from "./Store/Store";

import 'antd/dist/antd.css';
import ShoppingList from "./ShoppingList";

import "./App.scss"

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
            <div className="store">
            <Store productsByDepartment={productsByDepartment} onProductClick={handelClick}/>
            </div>
            <div className="shopping-list">
            <ShoppingList shoppingList={shoppingList}/>
            </div>
        </div>
    );
}

export default App;
