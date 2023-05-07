import React, {Component} from 'react';
import ItemRow from './ItemRow';


export default class FilterTable extends Component {
    render () {
        const showInStock = this.props.inStockOnly;
        if (showInStock)
            console.log('Only  show courses took already');
        else 
            console.log('show all courses');
        const rows = [];
        const items = this.props.items;
        items.forEach((item) => {
            
            if (showInStock && !item.inStock) {
                console.log("skip" + item.name);
                return;
            }
            
            rows.push(
                <ItemRow
                    item={item}
                    key={item.name}
                />
                );
               
        });
        
        return (
        <table className="table table-striped table-bordered table-sm m-2 "> 
                <thead className="text-white bg-info text-center">
                    <tr>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Desc</th>
                    <th>Took</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
        );
    }
}
export const ITEMS = [
    {Category: 'Major', name: 'CSC141', inStock: true, desc:'Java I',took: 'took'},
    {Category: 'Major', name: 'CSC142', inStock: true, desc:'Java II', took: 'took'},
    {Category: 'Major', name: 'CSC240', inStock: false, desc:'Java III', took: '"Not Yet"'},
    {Category: 'Major', name: 'CSC241', inStock: false, desc:'Data Structure', took: '"Not Yet"'},
    {Category: 'GenEd', name: 'ESS200', inStock: true, desc:'Geology', took: 'took'},
    {Category: 'GenEd', name: 'ART100', inStock: false, desc:'Music Appreciation', took: '"Not Yet"'},
  ];
