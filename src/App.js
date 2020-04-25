import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import Table from "./components/Table";

function App() {
  
  // // Setting this.state.employees to the employees json array
  // state = {
  //   employees
  // };

// searchbyName() {
//   const [searchTerm, setSearchTerm] = React.useState("");
//   const [searchResults, setSearchResults] = React.useState([]);

//   const handleChange = event => {
//     setSearchTerm(event.target.value);
//   }



// }

// //function to sort when column header is clicked
// handleSort = ()=>{

// }


//function to search dynamically "on change" as letters are typed
//will also need e prevent default
       

  // Map over this.state.employees and render a td component for each employee
  // render() {
    return (
      <Wrapper>
        <Title>Employees List</Title>
        <Table>
          <thead>
          <tr> 
          <th>Image</th>
          <th>Name</th>
          <th>Office</th>
          <th>Email</th>
          <th>Phone</th>
          </tr>
          </thead>

          <tbody>
          {employees.map( emp =>(
            <tr key={emp.id}>
            <td></td>
            <td>{emp.name}</td>
            <td>{emp.location}</td>
            <td>{emp.email}</td>
            <td>{emp.phone}</td>
            </tr>
       ))}
          </tbody>
        </Table>
        
      </Wrapper>
    );
  }
// }

export default App;
