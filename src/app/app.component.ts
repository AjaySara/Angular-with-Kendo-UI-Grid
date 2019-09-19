import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<h2>Product List - </h2>
  <kendo-grid [kendoGridBinding]="gridData" style="height: 300px">
      <kendo-grid-column field="ProductID" title="ID" width="80">
      </kendo-grid-column>
      <kendo-grid-column field="ProductName" title="Product" width="240">
      </kendo-grid-column>
      <kendo-grid-column field="UnitPrice" title="Price" width="80">
      </kendo-grid-column>
      <kendo-grid-column field="UnitsInStock" title="In stock" width="80">
      </kendo-grid-column>
  </kendo-grid>
`
 })
export class AppComponent {
  private gridData: any[] = [
    {
      "ProductID": 1,
      "ProductName": "Wheat - Food Item",
      "SupplierID": 1,
      "CategoryID": 1,
      "QuantityPerUnit": "520 bags",
      "UnitPrice": 5000.00,
      "UnitsInStock": 480,
      "UnitsOnOrder": 6594,
      "ReorderLevel": 1,
      "Discontinued": true,
      "Category": {
          "CategoryID": 1,
          "Name": "Wheat Foods",
          "Description": "Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. There are many species of wheat which together make up the genus Triticum; the most widely grown is common wheat"
      }
    }, {
        "ProductID": 2,
        "ProductName": "Rice  - Food Item",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "500 bags",
        "UnitPrice": 6000.00,
        "UnitsInStock": 17,
        "UnitsOnOrder": 2322,
        "ReorderLevel": 2,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "Name": "Rice Foods",
            "Description": "Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia"
        }
    },
    {
        "ProductID": 3,
        "ProductName": "Rice  - Food Item",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "500 bags",
        "UnitPrice": 6000.00,
        "UnitsInStock": 17,
        "UnitsOnOrder": 2322,
        "ReorderLevel": 2,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "Name": "Rice Foods",
            "Description": "Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia"
        }
    },
    {
        "ProductID": 4,
        "ProductName": "Rice  - Food Item",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "500 bags",
        "UnitPrice": 6000.00,
        "UnitsInStock": 17,
        "UnitsOnOrder": 2322,
        "ReorderLevel": 2,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "Name": "Rice Foods",
            "Description": "Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia"
        }
    },
    {
        "ProductID": 5,
        "ProductName": "Rice  - Food Item",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "500 bags",
        "UnitPrice": 6000.00,
        "UnitsInStock": 17,
        "UnitsOnOrder": 2322,
        "ReorderLevel": 2,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "Name": "Rice Foods",
            "Description": "Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia"
        }
    },
        {
            "ProductID": 6,
            "ProductName": "B.Rice  - Food Item",
            "SupplierID": 1,
            "CategoryID": 1,
            "QuantityPerUnit": "500 bags",
            "UnitPrice": 6000.00,
            "UnitsInStock": 17,
            "UnitsOnOrder": 2322,
            "ReorderLevel": 2,
            "Discontinued": false,
            "Category": {
                "CategoryID": 1,
                "Name": "Rice Foods",
                "Description": "Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia"
            }
        
    }];
}
