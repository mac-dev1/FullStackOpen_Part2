import { useEffect, useState } from "react"
import ShowCountry from "./ShowCountry"

function ShowCountries({list,value,setCountry}){
    const [show,setShow] = useState(false)

    useEffect(()=>{
        setShow(false)
        setCountry()
    },[value])

    const handleShow = (country) =>{
        setCountry(country)
        setShow(true)
    }

    return list.length>1 && !show ?    
        list.map(country =>
        <li key={country.name.common}>{country.name.common}
            <button onClick={() => handleShow(country)}>show</button>
        </li>)                
        //:
        //list.length > 1 && show?
          //  <ShowCountry country={show} />
        :
        list.length === 1?
            <p>{list}</p>:<></>
}

export default ShowCountries