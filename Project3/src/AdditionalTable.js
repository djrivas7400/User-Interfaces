import React, { Component } from "react";
import { AdditionalTableRow } from "./AdditionalTableRow";

export class AdditionalTable extends Component {

    render() {
        const name = this.props.firstName;
        const credits = this.props.transferCredits;

        let rows = [];

    if(credits < 40){
    rows.push(
        this.props.Additional[0],
        this.props.Additional[1],
        this.props.Additional[2],
        this.props.Additional[3],
        this.props.Additional[4],
        this.props.Additional[5]);
    }

    if(credits >= 40 && credits <= 70){
    rows.push(
        this.props.Additional[0],
        this.props.Additional[1],
        this.props.Additional[3],
        this.props.Additional[4]
        );
    }

    if(credits > 70){
    rows.push(
        this.props.Additional[0],
        this.props.Additional[3]
        );
    }

        return <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th colSpan="7" 
                                className="bg-primary text-white text-center h4 p-2">
                            Additional Requirment for {name}
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
                        rows.map(c => 
                            <AdditionalTableRow Course={ c } 
                                key={ c.id }
                                editCallback={ this.props.editCallback }
                                deleteCallback={ this.props.deleteCallback } />)
                    }
                </tbody>
            </table>        
    }
}