import React, {Component} from 'react';

const TableHeader = () =>{
   return (
    <thead>
    <tr>
        <th>Name</th>
        <th>Stack</th>
        <th>Sex</th>
    </tr>
</thead>
   )
}
const TableBody = (props) =>{
    const rows = props.bioData.map((row, index)=>{
        return (
            <tr key={index}>
                <td>{row.Name}</td>
                <td>{row.Stack}</td>
                <td>{row.Sex}</td>
                <td>
                <button onClick={() => props.removeBio(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
        
    )
}
class Table extends Component {
    render() {
        // const {bioData} = this.props
        const {bioData, removeBio } = this.props
        return (
            <table>
                 <TableHeader/>
                 <TableBody bioData={bioData} 
                 removeBio={removeBio}/>
            </table>
        )
    }
}
export default Table