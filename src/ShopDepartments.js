import React from "react";
import Product from "./Product";
import {Tabs} from "antd";
import './ShopDepartments.scss'

const {TabPane} = Tabs;

const ShopDepartments = (props) => {
    const {productsByDepartment} = props;
    console.log(productsByDepartment);
    return (
        <Tabs defaultActiveKey="1" tabPosition="left">
            {[...Object.keys(productsByDepartment)].map(department => (
                <TabPane tab={department} key={department}>
                    <div className='products-of-department'>
                        {/*{department}*/}
                        {productsByDepartment[department].map(productOfDepartment => <Product
                            product={productOfDepartment} key={productOfDepartment.id}/>)}
                    </div>
                </TabPane>
            ))}
        </Tabs>
    )
};

export default ShopDepartments