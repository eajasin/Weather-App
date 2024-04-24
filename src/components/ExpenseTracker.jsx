import {useState, useEffect} from 'react'
import UpdateExpenses from './UpdateExpenses'

export default function ExpenseTracker(){

    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [expense, setExpense] = useState(0)
    const [expenseEntries, setExpenseEntries] = useState([])
    const [totalExpenses, setTotalExpenses] = useState([])

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleExpense = (e) => {
        setExpense(parseFloat(e.target.value))
    }

    const addEntry = (e) => {
        e.preventDefault()

        if(!category || !description || !expense){
            alert("All fields must be completed.")
            return
        }

        let newEntry = {
            id: Math.random() * 100000000,
            category: category,
            description: description,
            expense: expense
        }

        setExpenseEntries([...expenseEntries, newEntry])
        setCategory("")
        setDescription("")
        setExpense("")

        //console.log([...expenseEntries, newEntry])
        

    }

    let total = () => {
        let total = expenseEntries.reduce((total, entry) => total + parseFloat(entry.expense), 0)
        setTotalExpenses(total)

        // console.log("total:", total)
    }

    useEffect(() => {
        total()
    })

    return (
        <div>
            <h1>Expenses Tracker</h1>
            <form onSubmit={addEntry}>
                <select value={category} onChange={handleCategory}>
                    <option value="">Select a Category</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Housing">Housing</option>
                    <option value="Debt">Debt</option>
                </select>
                <input type='text' value={description} placeholder='Enter Description' onChange={handleDescription}/>
                <input type='number' value={expense} placeholder='Enter Expense' onChange={handleExpense}/>
                <button type='submit'>Add Expense</button>
            </form>
            <UpdateExpenses expenseEntries={expenseEntries} setExpenseEntries={setExpenseEntries} totalExpenses={totalExpenses}/>
        </div>
    )
}