import React from "react";

const filterByDepartments = (products) => {
    // create an array with all the departments (keys of the final object)
    let departments = Array.from( new Set (products.map(product => product.department)));



    console.log(departments);
}




//create an array of values (value = product)

//add value in object


export default filterByDepartments;

