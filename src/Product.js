import React from "react";
import {Card, Button} from "antd";

const Product = ({product}) => (
    <div>
        <Card title={product.name} style={{width: 300}}>
            <p>{product.department}</p>
            <p>{product.color}</p>
            <p>{product.price}</p>
            <Button block>Add to shopping list</Button>
        </Card>
    </div>
)

export default Product