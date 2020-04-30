import React, {useEffect} from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import Table from "./components/Table";


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
  const [sortStatus, setsortStatus] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(employees);

  //function to set the search term to input value
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };


  const handleSort = event => {
    console.log("click sort:", event.target)
    // sort and update search results
    console.log("sortstatus: ",sortStatus)
    let sort = !sortStatus
    console.log("status:", sort)
    setsortStatus(sort);
  };

useEffect(() => {
  console.log("effect 1")
    const results = employees.filter(emp => 
      emp.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }, [searchTerm]);


  //useeffect to run after each render
useEffect(() => {
  console.log("effect 2 ")
   /// here we do the sort
   let sortedEmp = []
   if (sortStatus){
     sortedEmp = searchResults.sort( (a,b)=>a.name < b.name ? 1:-1)
   }
   else {
    sortedEmp = searchResults.sort( (a,b)=>a.name > b.name ? 1:-1)
   }
    
  
    // if (sortStatusl {
    //   sorttedEmp.sort((a, b) => {
    // if (so] < b[sortConfig.key]) {
    //     return sortConfig.direction === 'ascending' ? -1 : 1;
    //   }
    //   if (a[sortConfig.key] > b[sortConfig.key]) {
    //     return sortConfig.direction === 'ascending' ? 1: -1 ;
    //   }
    //     return 0;
    // });
  
      setSearchResults(sortedEmp);
    }, [sortStatus, searchResults]);


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
            onClick={handleSort}
            id="name">
            <span>
            {sortStatus ? '🔽' : '🔼'}
                         
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
