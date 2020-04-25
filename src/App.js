import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import Table from "./components/Table";

function App() {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = employees.filter(emp => 
      emp.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }, [searchTerm]);


  


// //function to sort when column header is clicked
// handleSort = ()=>{

// }


//function to search dynamically "on change" as letters are typed
//will also need e prevent default
       

  //return of components
    return (
      <Wrapper>
        <Title>Employees List</Title>
        <div className="App">
          <input
            type="text"
            placeholder="Search by employee name"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
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
          {searchResults.map( emp =>(
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
