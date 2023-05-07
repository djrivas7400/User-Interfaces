import React from  "react";
import './App.css';
import { CourseDisplay } from "./CourseDisplay";

export default class  App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      courseItems: [
        {id: 1, description: " Writing1", semester: " ", prefix: " ENG", number: "368/371 ", grade: " "},
        {id: 2, description: " Writing2", semester: " ", prefix: " ", number: " ", grade: " "},
        {id: 3, description: " Writing3", semester: " ", prefix: " ", number: " ", grade: " "},
      ],
      SpeakingItems: [
        {id: 1, description: " Speaking1", semester: " ", prefix: " SPK", number: " 208/230", grade: " "},
        {id: 2, description: " Speaking2", semester: " ", prefix: " ", number: " ", grade: " "},
        {id: 3, description: " Speaking3", semester: " ", prefix: " ", number: " ", grade: " "},
      ],
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
cancelChange = () => {
 
}

render (){
    return (
      <>
        <CourseDisplay
        descripton="IDontKnowWhatIsThisFor"
        coursesDisplayed={this.state.courseItems}
        SpeakingDisplayed = {this.state.SpeakingItems}
        saveCourseDisplayCallBack= {p => this.saveData("courseItems", p)}
        cancelChange={this.cancelChange}
         />
      </>
    );
  }
}
  