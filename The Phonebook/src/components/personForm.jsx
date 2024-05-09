import { useState } from "react"
import personService from '../services/phonebook'

const PersonForm = ({persons,setPersons}) =>{
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event)=>{
        event.preventDefault()
        const personObject = {
          name: newName,
          number: newNumber,
          id: `${persons.length+1}`
        }
        personService
            .create(personObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')    
                setNewNumber('')
            })
            .catch(error => alert(error))        
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