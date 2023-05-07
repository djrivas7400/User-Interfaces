import React, { Component } from "react";

export class DistributiveTableRow extends Component {

    render() {
        let c = this.props.course;
        return <tr>
            <td>{ c.id }</td>
            <td>{ c.description }</td>
            <td>{ c.Semester}</td>
            <td>{ c.Prefix }</td>
            <td>{ c.Number }</td>
            <td>{ c.Grade }</td>
            <td>
                <button className="btn btn-sm btn-warning m-1"
                    onClick={ () => this.props.editCallback(c) }>
                        Edit
                </button>                   
            </td>
        </tr>
    }
}
