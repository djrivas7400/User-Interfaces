
import React, { Component } from "react";

export default class CourseTableRow extends Component {

    render() {
        let p = this.props.theStudent;
        return <tr>
            <td>{ p.id }</td>
            <td>{ p.description}</td>
            <td>{ p.semester }</td>
            <td>{ p.prefix }</td>
            <td>{ p.number }</td>
            <td>{ p.grade }</td>
            <td>
                {<button className="btn btn-sm btn-warning m-1"
                    onClick={ () => this.props.editCallback(p) }>
                        Edit
                </button>}
            </td>
        </tr>
    }
}