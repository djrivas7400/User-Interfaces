import React, { Component } from "react";
import { AdditionalTable } from "./AdditionalTable"
import { AdditionalEditor } from "./AdditionalEditor";

export class AdditionalDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedCourse: null
        }
    }

    startEditing = (add) => {
        this.setState({ showEditor: true, selectedCourse: add })
    }


    cancelEditing = () => {
        this.setState({ showEditor: false, selectedCourse: null })
    }

    saveProduct = (add) => {
        this.props.saveCallback(add);
        this.setState({ showEditor: false, selectedCourse: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <AdditionalEditor 
                key={ this.state.selectedCourse.id || -1 }
                Course={ this.state.selectedCourse } 
                saveCallback={ this.saveProduct }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                <AdditionalTable Additional={ this.props.Additional }
                    editCallback={ this.startEditing }
                    deleteCallback={ this.props.deleteCallback }
                    firstName = {this.props.firstName} 
                    transferCredits = {this.props.transferCredits} />            
                                       
            </div>
        }
    }
}
