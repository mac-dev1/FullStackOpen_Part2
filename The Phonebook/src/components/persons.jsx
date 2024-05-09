import Person from "./person"

const Persons = ({persons,filter}) =>{
    
    return(
    <>
        {persons.map(person => filter === '' ||
         person.name.toLowerCase().includes(filter.toLowerCase())
         ?<Person key={person.id} person={person}/> : [])}   
    </>
    )
}

export default Persons