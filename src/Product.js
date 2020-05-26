import React from "react";
import './Product.scss'
import {Card, Button} from "antd";

const Product = ({product}) => (
    <div className="product">
        <Card bordered={true} style={{width: 250}}>
            <p>{product.name}</p>
            <p>{product.department}</p>
            <p>{product.color}</p>
            <p>{product.price}</p>
            <Button block>Add to shopping list</Button>
        </Card>
    </div>
)

export default Product