import React from "react";

const ShoppingList = (props) => {
    const {shoppingList} = props;
    return (
        <div>
            <p>Your shopping list:</p>
            {props.shoppingList.map(boughtProduct =>
                boughtProduct.name
            )}
        </div>
    )
}

export default ShoppingList