import { useState,useEffect } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/persons'
import personService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filterName, setFilter] = useState('')

  useEffect(()=>{
    console.log('effect')
    personService
      .getAll()
      .then(response=>{
        console.log('promise fulfilled')
        console.log(response)
        setPersons(response)
      })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filterName} setFilter={setFilter} />

      <h3>Add a new</h3>

      <PersonForm persons={persons} setPersons={setPersons} />

      <h3>Numbers</h3>

      <Persons persons={persons}  filter={filterName}/>
    </div>
  
  )
}

export default App
