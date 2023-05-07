import React, { Component } from "react";

export class FoundationEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                id: props.course.id || "",
                description: props.course.description || "", 
                Semester: props.course.Semester || "",
                Prefix: props.course.Prefix || "" , 
                Number: props.course.Number || "",
                Grade: props.course.Grade || "",
                Disable: props.course.Disable || ""
            }
            
        }
    }

    handleChange = (ev) => {
        ev.persist();
        this.setState(state => state.formData[ev.target.name] =  ev.target.value);
    }

    handleClick = () => {
        this.props.saveCallback(this.state.formData);
    }

    render() {
        return <div className="m-2">
            <div className="form-group">
                <label>ID</label>
                <input className="form-control" name="id"
                    disabled
                    value={ this.state.formData.id }
                    onChange={ this.handleChange } />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input className="form-control" name="description"
                    value={ this.state.formData.description }
                    onChange={ this.handleChange } />
            </div>    
            <div className="form-group">
                <label>Semester</label>
                <input className="form-control" name="Semester"
                    value={ this.state.formData.Semester }
                    onChange={ this.handleChange } />
            </div>        
            <div className="form-group">
                <label>Prefix</label>
                <input className="form-control" name="Prefix"
                value={ this.state.formData.Prefix }
                onChange = {this.handleChange}
                disabled = {this.state.formData.Disable}
             />
            </div>             
            <div className="form-group">
                <label>Number</label>
                <input className="form-control" name="Number"
                    value={ this.state.formData.Number }
                    onChange={ this.handleChange } />
            </div>  
            <div className="form-group">
                <label>Grade</label>
                <input className="form-control" name="Grade"
                    value={ this.state.formData.Grade }
                    onChange={ this.handleChange } />
            </div>                        
            <div className="text-center">
                <button className="btn btn-primary m-1" onClick={ this.handleClick }>
                    Save
                </button>
                <button className="btn btn-secondary" 
                        onClick={ this.props.cancelCallback }>
                    Cancel
                </button>                
            </div>
        </div>
    }
}
