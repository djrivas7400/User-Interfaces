import React, { Component } from "react";
import { FoundationTableRow } from "./FoundationTableRow";

export class FoundationTable extends Component {

    render() {
        const name = this.props.firstName;
        return <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th colSpan="7" 
                                className="bg-primary text-white text-center h4 p-2">
                            Academic Foundation for {name} 
                        </th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th> Semester</th>
                        <th>Prefix</th>
                        <th>Number</th>
                        <th>Grade</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.Foundation.map(c => 
                            <FoundationTableRow course={ c } 
                                key={ c.id }
                                editCallback={ this.props.editCallback }
                                deleteCallback={ this.props.deleteCallback } />)
                    }
                </tbody>
            </table>        
    }
}
