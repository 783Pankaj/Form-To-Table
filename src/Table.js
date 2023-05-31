import React from "react";

const Table=({tableData})=>{
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{data.name}</td>
                          <td>{data.gender}</td>
                          <td>{data.city}</td>
                          <td>{data.email}</td>
                          <td>{data.contact}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}
export default Table;