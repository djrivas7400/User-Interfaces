import React, {Component} from 'react';
export default class ItemRow extends Component {
    render() {
        const item = this.props.item;
        const name = item.inStock ?
          item.name :
          <span style={{color: 'red'}}>
            {item.name}
          </span>;
          const took = item.inStock?
          item.took:
          <span style={{color: 'red'}}>
            {item.took}
          </span>;

        //const inStock = item.inStock ? "took" :
               //"Not Yet";
        return (
          <tr>
            <td>{item.Category}</td>
            <td>{name}</td>
            <td>{item.desc}</td>
            <td>{took}</td>
          </tr>
        );
    }
}
