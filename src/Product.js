import React from "react";
import {Card, Button} from "antd";

const Product = ({product}) => (
    <div className="products-of-department">
        <Card title={product.name} style={{width: 350}}>
            <p>{product.department}</p>
            <p>{product.color}</p>
            <p>{product.price}</p>
            <Button block>Add to shopping list</Button>
        </Card>
    </div>
)

export default Product