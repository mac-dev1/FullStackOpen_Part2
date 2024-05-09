import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilter] = useState('')

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

  const handleFilterName = (event) =>{
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <input value={filterName} onChange={handleFilterName} />
      </div>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange} required/> </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} required/> </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => filterName === '' || 
        person.name.toLowerCase().includes(filterName.toLowerCase())?
         <p key={person.name}>{person.name} {person.number}</p>:<></> )}
    </div>
  )
}

export default App
