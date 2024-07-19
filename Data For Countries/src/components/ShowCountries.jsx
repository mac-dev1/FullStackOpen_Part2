import { useEffect, useState } from "react"
import ShowCountry from "./ShowCountry"

function ShowCountries({list,value}){
    const [show,setShow] = useState(false)

    useEffect(()=>{
        setShow(false)
    },[value])

    const handleShow = (country) =>{
        setShow(country)
    }

    return list.length>1 && !show?    
        list.map(country =>
        <li key={country.name.common}>{country.name.common}
            <button onClick={() => handleShow(country)}>show</button>
        </li>)                
        :
        list.length > 1 && show?
            <ShowCountry country={show} />
        :
            <p>{list}</p>
}

export default ShowCountries