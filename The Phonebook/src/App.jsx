import { useState,useEffect } from 'react'
import axios from 'axios'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filterName, setFilter] = useState('')

  useEffect(()=>{
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(respose=>{
        console.log('promise fulfilled')
        console.log(respose.data)
        setPersons(respose.data)
      })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filterName} setFilter={setFilter} />

      <h3>Add a new</h3>

      <PersonForm persons={persons} setPersons={setPersons} />

      <h3>Numbers</h3>

      <Persons people={persons} filter={filterName}/>
    </div>
  
  )
}

export default App
