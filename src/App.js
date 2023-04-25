
import { useState } from 'react';
import './App.css';
import TableData from './components/TableData';
import TableHeder from './components/TableHeader';
const data1 = [
  { Id: 1, OrgKey: 'John',LookupContactType: 25, NameFormatIndividual: 'john@example.com',NameFormatCompany: '123-456-7890', DateCreatedUtc: '123 Main St',LastUpdatedUtc:'323ddf'},
  { Id: 2, OrgKey: 'Jane',LookupContactType: 30, NameFormatIndividual: 'jane@example.com',NameFormatCompany: '123-456-7890', DateCreatedUtc: '456 Second St',LastUpdatdeUtc:'323ddf' },
  { Id: 3, OrgKey: 'Bob',LookupContactType: 35, NameFormatIndividual: 'bob@example.com',NameFormatCompany: '123-456-7890', DateCreatedUtc: '789 Third St',LastUpdatedUtc:'323ddf' },
  { Id: 4, OrgKey: 'Alice',LookupContactType: 40, NameFormatIndividual: 'alice@example.com',NameFormatCompany: '123-456-7890', DateCreatedUtc: '012 Fourth St',LastUpdatdeUtc:'323ddf' }
];
// const data2 = [
//   { Id: 1, OrgKey: 'John',ActionId: 25,MethodName: 'john@example.com',LogType: '123-456-7890',LogMessage:'chamuni', DateCreatedUtc: '123 Main St',LastUpdatedUtc:'323ddf'},
//   { Id: 2, OrgKey: 'Jane',ActionId: 30,MethodName: 'jane@example.com',LogType: '123-456-7890',LogMessage:'chamuni', DateCreatedUtc: '456 Second St',LastUpdatdeUtc:'323ddf' },
//   { Id: 3, OrgKey: 'Bob',ActionId: 35,MethodName: 'bob@example.com',LogType: '123-456-7890',LogMessage:'chamuni', DateCreatedUtc: '789 Third St',LastUpdatedUtc:'323ddf' },
//   { Id: 4, OrgKey: 'Alice',ActionId: 40,MethodName: 'alice@example.com',LogType: '123-456-7890',LogMessage:'chamuni', DateCreatedUtc: '012 Fourth St',LastUpdatdeUtc:'323ddf' }
// ];

function App() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [tableData, setTableData] = useState(data1);

  const handleDelete=(Id)=>{
    setTableData(tableData.filter(el => el.Id !== Id));
    
  }

  const handleEdit = (Id) => {
    const editRow = tableData.find((i) => i.Id === Id);
    setSelectedRow(editRow);
  };

  
  const handleSave = () => {
    const updatedData = tableData.map((row) => {
      if (row.Id === selectedRow.Id) {
        return selectedRow;
      }
      return row;
    });
    setTableData(updatedData);
    setSelectedRow(null);
  };
  

  return (
    <div className="App">
        <table className="table">
          <TableHeder />
          <TableData handleEdit={handleEdit}
          handleDelete={handleDelete}
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow} Data={tableData}/>
        </table>
        {selectedRow && (
        <div>
          <input
            type="text"
            value={selectedRow.name}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, name: e.target.value })
            }
          />
           <input
            type="number"
            value={selectedRow.age}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, age: e.target.value })
            }
          />
           <input
            type="text"
            value={selectedRow.email}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, email: e.target.value })
            }
          />
           <input
            type="number"
            value={selectedRow.phone}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, number: e.target.value })
            }
          />
           <input
            type="text"
            value={selectedRow.address}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, address: e.target.value })
            }
          />
          <button onClick={handleSave}>Save</button>
        </div>
        )}
    </div>
  );
}

export default App;
