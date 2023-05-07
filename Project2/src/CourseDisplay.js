import React, { Component } from "react";
import  { CourseTable }  from "./CourseTable";
import { CourseEditor } from "./CourseEditor";
import Form from "react-bootstrap/Form";
import { SpeakingTable } from "./SpeakingTable";

export class CourseDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentName: '' ,
            Credits: 0 ,
            Editor: false,
            theCourses: null,
        }
    }

    saveStudent = (courses) => {
        this.props.saveCourseDisplayCallBack(courses); 
        this.setState({ Editor: false, theCourses: null })      
    }
    cancelStudent = (courses) => {
        this.setState({ Editor: false, theCourses: null })        
    }
    UserName = (event) =>{
        this.setState({studentName: event.target.value});
    }
    UserCredits= (event) =>{
        this.setState({Credits: event.target.value}); 
    }
    Edit = (courses) => {
        this.setState({ Editor: true, theCourses: courses })
    }

    render() {
        if (this.state.Editor) {
            return <CourseEditor 
                key={ this.state.theCourses.id  }
                courses={ this.state.theCourses } 
                saveEditChanges={ this.saveStudent }
                cancelChange = { this.cancelStudent }
            />
        } else {
            return(
            <div>
            <Form className="col-lg-7 offset-lg-4">
                <Form.Group controlId="formBasicEmail" className = "form-inline">
                  <Form.Label>Student name: </Form.Label>
                  <Form.Control type="Name" placeholder="Enter your name" value={this.state.studentName} onChange={this.UserName}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className = "form-inline">
                    <Form.Label>Total Transfer Credits: </Form.Label>
                <Form.Control type="number" placeholder="Transfer Credits" value={this.state.Credits} onChange={this.UserCredits} />
                <Form.Text className="text-muted">
                  </Form.Text>
            </Form.Group>
            </Form>
            <div className="m-2">
                <CourseTable 
                    firstName = {this.state.studentName}
                    transferCredits = {this.state.Credits}
                    course = {this.props.coursesDisplayed}
                    editCallback={ this.Edit }
                />   
                <SpeakingTable 
                    firstName = {this.state.studentName}
                    transferCredits = {this.state.Credits}
                    course = {this.props.SpeakingDisplayed}
                    editCallback={ this.Edit }
                />                                  
            </div>
            </div>
            );
        }
    }
}