import React, {useState} from "react";
import './Product.scss'
import {Card, Button} from "antd";

const Product = ({product, handleClick }) => {

    return (
        <div className="product">
            <Card bordered={true} style={{width: 250}}>
                <p>{product.name}</p>
                <p>{product.department}</p>
                <p>{product.color}</p>
                <p>{product.price}</p>
                <Button block onClick={() => handleClick(product)}>Add to shopping list</Button>
            </Card>
        </div>
    )
}

export default Product