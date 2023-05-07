import React, { Component } from "react";
import { DistributiveEditor } from "./DistributiveEditor";
import { DistributiveTable } from "./DistributiveTable";

export class DistributiveDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedCourse: null
        }
    }

    startEditing = (course) => {
        this.setState({ showEditor: true, selectedCourse: course })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedCourse: null })
    }

    saveSupplier= (course) => {
        this.props.saveCallback(course);
        this.setState({ showEditor: false, selectedCourse: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <DistributiveEditor
                key={ this.state.selectedCourse.id || -1 }
                course={ this.state.selectedCourse } 
                saveCallback={ this.saveSupplier }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                    <DistributiveTable Distributive={ this.props.Distributive }
                        editCallback={ this.startEditing }
                        deleteCallback={ this.props.deleteCallback }
                        firstName = {this.props.firstName}
                    />                    
            </div>        
        }
    }
}
