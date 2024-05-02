import React from "react";
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Selection, Inject, Sort, Edit, Filter, Toolbar } from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-5 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete', "Search"]}
        width="auto"
        editSettings={{allowDeleting: true, allowEditing: true}}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar, Selection, Edit, Sort, Filter ]}/>
      </GridComponent>
    </div>
  
  )
};

export default Customers;