import React, { Component } from "react";
import { FoundationTable } from "./FoundationTable"
import { FoundationEditor } from "./FoundationEditor";

export class FoundationDisplay extends Component {

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

    saveCourse = (course) => {
        this.props.saveCallback(course);
        this.setState({ showEditor: false, selectedCourse: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <FoundationEditor 
                key={ this.state.selectedCourse.id || -1 }
                course={ this.state.selectedCourse } 
                saveCallback={ this.saveCourse }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                <FoundationTable Foundation={ this.props.Foundation }
                    editCallback={ this.startEditing }
                    deleteCallback={ this.props.deleteCallback }
                    firstName = {this.props.firstName}  />            
                                       
            </div>
        }
    }
}
