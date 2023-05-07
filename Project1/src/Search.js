import React, {Component} from 'react';
//import 'bootstrap/dist/css/bootstrap.css'
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleInStockChange(e) {
        if (e.target.checked === true )
           console.log('Checked');
        else  
           console.log("not checked");
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        return(
            <form>
                <input
                    type="checkbox"
                    checked={this.props.inStockOnly}
                    onChange={this.handleInStockChange}
                    />
                {' '}
                Only show courses took already
        
            </form>
        )
    }
    
}
