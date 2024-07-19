import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import ShowCountries from './components/ShowCountries'
import countriesService from './services/countries'
import ShowCountry from './components/ShowCountry'

function App() {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([]) 
  const [country, setCountry] = useState()
  const [allCountries,setAllCountries] = useState([])


  useEffect(()=>{
    countriesService.getAll().then(response => setAllCountries(response))
  },[])

  useEffect(() => {    
    if(value.length > 0){    
      const listCountries = allCountries.filter(name => name.toLowerCase().includes(value.toLowerCase()))    
      if(listCountries.length > 10){
        setCountries(["Too many matches, specify another filter"])
      }else if(listCountries.length === 1){
        setCountries([])
        countriesService.getOne(listCountries[0].toLowerCase()).then(response => setCountry(response))
      }else{
        setCountry()
        setCountries(listCountries)
      }
    }else{
      setCountries([])
      setCountry()
    }
  },[value,allCountries])

  const handleChange = (event) => {
    setValue(event.target.value)    
  }

  return (
    <>
      Find Countries <input value={value} onChange={handleChange} />
      <ShowCountries list={countries} />
      <ShowCountry country={country} />
    </>
  )
}

export default App
