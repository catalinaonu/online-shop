import React from "react";
import Product from "./DisplayProduct";
import {Tabs} from "antd";

const {TabPane} = Tabs;

const DisplayDepartments = (props) => {
    const {productsByDepartment} = props;
    console.log(productsByDepartment);
    return (
        <Tabs defaultActiveKey="1" tabPosition="left" >
            {[...Object.keys(productsByDepartment)].map(department => (
                <TabPane tab={department} key={department}>
                    <div>
                        {/*{department}*/}
                        {productsByDepartment[department].map(productOfDepartment =><Product product={productOfDepartment} key={productOfDepartment.id}/>)}
                    </div>
                </TabPane>
            ))}
        </Tabs>
    )
}

export default DisplayDepartments