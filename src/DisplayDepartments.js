import React from "react";
import {Tabs} from "antd";

const {TabPane} = Tabs;

const DisplayDepartments = (props) => {
    const {productsByDepartment} = props;
    console.log(productsByDepartment)

    return (
        <div>
            <Tabs defaultActiveKey="1" tabPosition="left" style={{height: 220}}>
                {[...Object.keys(productsByDepartment)].map(productByDepartment => (
                    <TabPane tab={productByDepartment} key={productByDepartment}>
                        {productByDepartment}
                    </TabPane>
                ))}
            </Tabs>
        </div>
    )
}

export default DisplayDepartments