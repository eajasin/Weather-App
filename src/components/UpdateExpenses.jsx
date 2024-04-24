import { useState } from "react";

export default function UpdateExpenses({expenseEntries, setExpenseEntries, totalExpenses}){

  const [isEditing, setIsEditing] = useState(false)
  const [editedEntryId, setEditedEntryId] = useState(null)
  const [editedEntry, setEditedEntry] = useState("")

  const deleteEntry = (id) => {
    let updatedEntries = expenseEntries.filter((entry) => entry.id !== id);
    setExpenseEntries(updatedEntries);
  };

  const handleEditing = (id) => {
    setIsEditing(true)
    // console.log(isEditing)
    setEditedEntryId(id)
    setEditedEntry(expenseEntries.find((entry) => entry.id === id).description)

    console.log("Description to edit:",expenseEntries.find((entry) => entry.id === id).description)
    
    
  }
  //console.log(expenseEntries[0].id)

  const updateEntry = () => {
    
    let updatedEntry = expenseEntries.map((entry) => entry.id === editedEntryId ? {...entry, description: editedEntry} : entry)
   

    setExpenseEntries(updatedEntry)
    setIsEditing(false)
  }

  return (
    <div>
      <table>
        <thead>
          <th>Category</th>
          <th>Description</th>
          <th>Expense</th>
        </thead>
        <tbody>
          {isEditing ? (
            <div>
              <input
              type="text"
              value={editedEntry}
              />
              <input
              type="text"
              value={editedEntry}
              />
              <button onClick={updateEntry}>Update</button>
            </div>
            
          ) : (
            expenseEntries.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.category}</td>
                <td>{entry.description}</td>
                <td>{entry.expense}</td>
                <td>
                  <button onClick={() => handleEditing(entry.id)}>Edit</button>
                  <button onClick={() => deleteEntry(entry.id)}>Delete</button>
                </td>
              </tr>
            ))
          )
          
          
          
          }
        </tbody>
        <tfoot style={{ fontWeight: "bold" }}>
          <tr>Total: ${totalExpenses}</tr>
        </tfoot>
      </table>
    </div>
  );
}
