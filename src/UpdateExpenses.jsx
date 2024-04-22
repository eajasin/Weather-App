export default function UpdateExpenses({
  expenseEntries,
  setExpenseEntries,
  totalExpenses,
}) {
  const deleteEntry = (id) => {
    let updatedEntries = expenseEntries.filter((entry) => entry.id !== id);
    setExpenseEntries(updatedEntries);
  };

  return (
    <div>
      <table>
        <thead>
          <th>Category</th>
          <th>Description</th>
          <th>Expense</th>
        </thead>
        <tbody>
          {expenseEntries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.category}</td>
              <td>{entry.description}</td>
              <td>{entry.expense}</td>
              <td>
                <button onClick={() => deleteEntry(entry.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot style={{ fontWeight: "bold" }}>
          <tr>Total: ${totalExpenses}</tr>
        </tfoot>
      </table>
    </div>
  );
}
