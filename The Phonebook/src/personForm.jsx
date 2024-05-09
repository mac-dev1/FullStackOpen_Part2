import { useState } from "react"

const PersonForm = ({persons,setPersons}) =>{

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event)=>{
        event.preventDefault()
        const personObject = {
          name: newName,
          number: newNumber
        }
        persons.find( e => e.name === personObject.name)?
          alert(`${newName} is already added to phonebook`):
          setPersons(persons.concat(personObject))
        setNewName('')    
        setNewNumber('')
    }

    const handleNameChange = (event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
    }
    
    const handleNumberChange = (event)=>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
    }

    return(
        <form onSubmit={addPerson}>
            <div>name: <input value={newName} onChange={handleNameChange} required/> </div>
            <div>number: <input value={newNumber} onChange={handleNumberChange} required/> </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm