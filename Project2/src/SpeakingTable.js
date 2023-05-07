import React, { Component } from "react";
import SpeakingTableRow from "./SpeakingTableRow";



export class SpeakingTable extends Component {

    render() { 
      const name = this.props.firstName;
      const credits = this.props.transferCredits;



      let rows = [];
      if(credits < 40){
        rows.push(
            this.props.course[0],
            this.props.course[1],
            this.props.course[2]);
        }
    
    if(credits >= 40 && credits <= 70){
    rows.push(
        this.props.course[0],
        this.props.course[1],
        );
    }

    if(credits > 70){
    rows.push(
        this.props.course[0]
        );
    }

    return (
        <>
        <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th colSpan="7" 
                                className="bg-primary text-white text-center h4 p-2">
                            Speaking Emphasis for {name}
                        </th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Semester</th>
                        <th>Prefix</th>
                        <th>Number</th>
                        <th>Grade</th>
                        <th>Editing</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map(p => 
                            <SpeakingTableRow theStudent={ p } 
                                key={ p.id }
                                editCallback={ this.props.editCallback }
                            />)
                    }
                </tbody>
            </table>
          </>
        )    
    }
}