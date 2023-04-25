const TableData = ({Data,handleDelete,handleEdit}) => {
  return Data.map((person) => {
    const { Id, OrgKey,LookupContactType, NameFormatIndividual, NameFormatCompany} = person;
   
    const onclickDelete=()=>{
       handleDelete(Id);
    }
    
    const onclickEdit=()=>{
      handleEdit(Id);
   }

   

    return (
     <>
      <tbody >
        <tr key={Id}>
          <td>{Id}</td>
          <td>{OrgKey}</td>
          <td>{LookupContactType}</td>
          <td>{NameFormatIndividual}</td>
          <td>{NameFormatCompany}</td>
          <td><button onClick={onclickEdit}>Edit</button></td>
          <td><button onClick={onclickDelete}>Delete</button></td>
        </tr>
      </tbody> 
     </>
    );
  });
};

export default TableData;