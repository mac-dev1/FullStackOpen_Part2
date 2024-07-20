import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import ShowCountries from './components/ShowCountries'
import countriesService from './services/countries'
import weatherService from './services/weather'
import ShowCountry from './components/ShowCountry'
import Weather from './components/Weather'

function App() {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([]) 
  const [country, setCountry] = useState()
  const [allCountries,setAllCountries] = useState([])
  const [weather, setWeather] = useState()


  useEffect(()=>{
    countriesService.getAll().then(response => setAllCountries(response))
  },[])

  useEffect(()=>{
    weatherService.getWeather(country?country.capital:null)
                  .then(response =>{ 
                    setWeather(response)                    
                  })
                  .catch(error => setWeather(null))
  },[country])

  useEffect(() => {    
    if(value.length > 0){    
      const listCountries = allCountries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))          
      if(listCountries.length > 10){
        setCountries(["Too many matches, specify another filter"])
      }else if(listCountries.length === 1){
        setCountries([])
        setCountry(listCountries[0])        
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
      <ShowCountries list={countries} value={value} setCountry={setCountry}/>
      <ShowCountry country={country} weather={weather} />
      <Weather weatherObj={weather} />
    </>
  )
}

export default App
