import Person from "./person"

const Persons = ({people,filter}) =>{
    return(
    <>
        {people.map(person => filter === '' || 
        person.name.toLowerCase().includes(filter.toLowerCase())?
         <Person key={person.name} person={person}/>:<></> )}
    </>
    )
}

export default Persons