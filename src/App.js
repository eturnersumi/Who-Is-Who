import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import Table from "./components/Table";
import { useTable, useSortBy } from 'react-table';


function App() {



  // function Table({ columns, data }) {
  //   const {
  //     getTableProps,
  //     getTableBodyProps,
  //     headerGroups,
  //     rows,
  //     prepareRow,
  //   } = useTable({
  //     columns,
  //     data,
  //   })
  // }
  
  //set the needed state variables and partner actions
  //state variables are searchTerm and Search Results
  //actions are setSearchTerm and setSearchResults
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  //function to set the search term to input value
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  //useeffect to run after each render
  React.useEffect(() => {
    const results = employees.filter(emp => 
      emp.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }, [searchTerm]);


  //return/render of components
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
        
          <Table id="table">
            <thead>
            <tr> 
            <th 
            id="name">
            <span>
            🔽🔼             
             </span>
            Name
            </th>
            <th>Office</th>
            <th>Email</th>
            <th>Phone</th>
            </tr>
            </thead>

            <tbody>
            {searchResults.map( emp =>(
              <tr key={emp.id}>
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


export default App;
