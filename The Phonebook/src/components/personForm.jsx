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
        if(!persons.map(person => person.name).includes(personObject.name)){
            personService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')    
                    setNewNumber('')
                })
                .catch(error => alert(error))        
            }
        else{
            if(window.confirm(`${personObject.name} is already added to the phonebook,replace the old number?`)){
                personObject.id = persons.find(person => person.name === personObject.name).id
                console.log(personObject)
                personService
                    .update(personObject)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => person.name === returnedPerson.name?
                        returnedPerson:person))
                        setNewName('')    
                        setNewNumber('')
                    })
                    .catch(error => alert(error))
            }
            
        }
    }

    const handleNameChange = (event)=>{
    setNewName(event.target.value)
    }
    
    const handleNumberChange = (event)=>{
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