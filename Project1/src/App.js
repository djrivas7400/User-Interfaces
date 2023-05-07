//import logo from './logo.svg';

import React, { Component} from 'react';
import './App.css';
import Search from './Search';
import FilterTable from './FilterTable';
import {ITEMS} from './FilterTable';

class App extends Component  {
  constructor(props){
    super(props);
    this.state = {
      inStockOnly: false
    }
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleInStockChange(inStock) {
    if (inStock===true)
      console.log('App:','TRUE')
    else 
       console.log('App:', 'false');
    this.setState( {inStockOnly: inStock} )
  }
  render() {
      return (
        <div className="app text-center">
          <div className="bg-primary m-3 p-2">
          <Search inStockOnly={this.state.inStockOnly}
                  onInStockChange={this.handleInStockChange}
            /></div>
          <FilterTable items={ITEMS} 
                    inStockOnly={this.state.inStockOnly} />
        </div>
      );
  }
  
}

export default App;
