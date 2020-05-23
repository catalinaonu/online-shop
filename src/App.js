import React from 'react';
import getProduct from './products'
import filterByDepartments from "./departments";

const products = getProduct(500);
console.log(products);

const departments = filterByDepartments(products);
console.log(departments);


function App() {

  return (
      <div className="App">

      </div>
  );
}

export default App;
