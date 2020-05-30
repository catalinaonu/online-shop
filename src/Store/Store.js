import React from "react";
import Product from "./Product";
import {Tabs} from "antd";
import './Store.scss'

const {TabPane} = Tabs;

const Store = (props) => {
    const {productsByDepartment} = props;
    const {onProductClick} = props;
    console.log(productsByDepartment);
    return (
        <Tabs defaultActiveKey="1" tabPosition="left">
            {[...Object.keys(productsByDepartment)].map(department => (
                <TabPane tab={department} key={department}>
                    <div className='products-of-department'>
                        {productsByDepartment[department].map(productOfDepartment =>
                            <Product product={productOfDepartment} key={productOfDepartment.id}
                                     handleClick={onProductClick}/>)}
                    </div>
                </TabPane>
            ))}
        </Tabs>
    )
};

export default Store