import React, { Component } from 'react';
import { Selector } from './Selector';
import { FoundationDisplay } from './FoundationDisplay';
import { DistributiveDisplay } from './DistributiveDisplay';
import { AdditionalDisplay } from './AdditionalDisplay';
import Form from 'react-bootstrap/Form';


export default class Data extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentName: '' ,
            Credits: 0 ,
            Foundation: [
                { id: 1, Semester: "",description: "First Year Experience", Prefix: "FYE", Number: "" , Disable: true},
                { id: 2, description: "English Composition I", Prefix: "WRT", Number: 120, Disable: true },
                { id: 3, description: "English Composition II", Prefix: "WRT", Number: 200 , Disable: true},
                { id: 4, description: "Mathematics", Prefix: "MAT", Number: 151, Disable: true },
                { id: 5, description: "Interdisciplinary", Prefix: "", Number: "", Disable: false },
                { id: 6, description: "Diverse Communities", Prefix: "", Number: "", Disable: false  }
            ],
            Distributive: [
                { id: 1, description: "Science I", Semester: "", Prefix: "" , Number: "", Grade: ""},
                { id: 2, description: "Science II", Semester: "", Prefix: "", Number: "",Grade: "" },
                { id: 3, description: "Behavior & Social Science I", Semester: "", Prefix: "", Number: "",Grade: "" },
                { id: 4, description: "Behavior & Social Science II", Semester: "", Prefix: "", Number: "",Grade: "" },
                { id: 5, description: "Humanity I", Semester: "", Prefix: "", Number: "",Grade: "" },
                { id: 6, description: "Humanity II", Semester: "", Prefix: "", Number: "",Grade: "" },
                { id: 7, description: "Art", Semester: "", Prefix: "", Number: "",Grade: "" }
            ],
            Additional: [
                { id: 1, description: "Writing Emphasis I", Semester: "", Prefix: "ENG" , Number: "", Grade: "", Disable: true},
                { id: 2, description: "Writing Emphasis II", Semester: "", Prefix: "WRT", Number: "",Grade: "", Disable: true },
                { id: 3, description: "Writing Emphasis III", Semester: "", Prefix: "WRT", Number: "",Grade: "", Disable: true },
                { id: 4, description: "Speaking Emphasis I", Semester: "", Prefix: "SPK", Number: "",Grade: "", Disable: true },
                { id: 5, description: "Speaking Emphasis II", Semester: "", Prefix: "", Number: "",Grade: "", Disable: false },
                { id: 6, description: "Speaking Emphasis III", Semester: "", Prefix: "", Number: "",Grade: "", Disable: false },
            ]
        }
        this.idCounter = 100;
    }

    saveData = (collection, item) => {
        if (item.id === "") {
            item.id = this.idCounter++;
            this.setState(state => state[collection] 
                = state[collection].concat(item));
        } else {
            this.setState(state => state[collection] 
                = state[collection].map(stored => 
                      stored.id === item.id ? item: stored))
        } 
    }

    deleteData = (collection, item) => {
        this.setState(state => state[collection] 
            = state[collection].filter(stored => stored.id !== item.id));
    }
    StudentName = (event) =>{
        this.setState({studentName: event.target.value});
    }
    StudentCredits= (event) =>{
        this.setState({Credits: event.target.value}); 
    }

    render() {
        return <div>
            <Form className="col-lg-7 offset-lg-4">
                <Form.Group controlId="formBasicEmail" className = "form-inline">
                  <Form.Label>Student name: </Form.Label>
                  <Form.Control type="Name" placeholder="Enter your name" value={this.state.studentName} onChange={this.StudentName}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className = "form-inline">
                    <Form.Label>Total Transfer Credits: </Form.Label>
                <Form.Control type="number" placeholder="Transfer Credits" value={this.state.Credits} onChange={this.StudentCredits} />
                <Form.Text className="text-muted">
                  </Form.Text>
            </Form.Group>
            </Form>
            <Selector>
                <FoundationDisplay 
                    name="Academic Foundation"//keep
                    Foundation={ this.state.Foundation}
                    saveCallback={ p => this.saveData("Foundation", p) }
                    deleteCallback={ p => this.deleteData("Foundation", p)}
                    firstName = {this.state.studentName}
                />
                <DistributiveDisplay
                    name="Distributive Requirment"//keep
                    Distributive={ this.state.Distributive }
                    saveCallback={ s => this.saveData("Distributive", s) }
                    deleteCallback={ s => this.deleteData("Distributive", s) } 
                    firstName = {this.state.studentName} />
                <AdditionalDisplay
                    name="Additional Requirment"//keep
                    Additional={ this.state.Additional }
                    saveCallback={ p => this.saveData("Additional", p) }
                    deleteCallback={ p => this.deleteData("Additional", p) }
                    firstName = {this.state.studentName}
                    transferCredits = {this.state.Credits} />
            </Selector>
        </div>
    }
}
