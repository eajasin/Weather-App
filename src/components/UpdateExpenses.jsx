import { useState } from "react";

export default function UpdateExpenses({expenseEntries, setExpenseEntries, totalExpenses}){

  const [isEditing, setIsEditing] = useState(false)
  const [editedEntryId, setEditedEntryId] = useState(null)
  const [editedEntry, setEditedEntry] = useState("")
  const [editedCategory, setEditedCategory] = useState("")
  const [editedDescription, setEditedDescription] = useState("")
  const [editedExpense, setEditedExpense] = useState("")

  const deleteEntry = (id) => {
    let updatedEntries = expenseEntries.filter((entry) => entry.id !== id);
    setExpenseEntries(updatedEntries);
  };

  const handleEditing = (id) => {
    setIsEditing(true)
    // console.log(isEditing)
    setEditedEntryId(id)

    let editingField = expenseEntries.find((entry) => entry.id === id)

    if (editingField){
      const {description, category, expense} = editingField
      setEditedCategory(category)
      setEditedDescription(description)
      setEditedExpense(expense)
    }
    setEditedEntry()

    console.log("Description to edit:",expenseEntries.find((entry) => entry.id === id).description)
    
    
  }
  //console.log(expenseEntries[0].id)

  const updateEntry = () => {
    let updatedEntry = expenseEntries.map((entry) => {
    if (entry.id === editedEntryId) {
        return {
            ...entry,
            description: editedDescription,
            category: editedCategory,
            expense: editedExpense
        };
    } else {
        return entry;
    }
  })
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
               <select value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)} >
                    <option value="">Select a Category</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Housing">Housing</option>
                    <option value="Debt">Debt</option>
                </select>
              <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              />
               <input
              type="number"
              value={editedExpense}
              onChange={(e) => setEditedExpense(e.target.value)}
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