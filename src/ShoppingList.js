import React from "react";
import { List } from "antd";

const ShoppingList = (props) => {
    const {shoppingList} = props;
    return (
        <List
            header={<div>Shopping List</div>}
            footer={<div>Footer </div>}
            bordered
            dataSource={shoppingList}
            renderItem={boughtProduct => <List.Item>{boughtProduct.name}</List.Item>}
        />
    )
}

export default ShoppingList