const Header = (props)=>{
    return (
      <h2>{props.course.name}</h2>
    )
  }
  
  const Part = ({name,exercises}) => {
    return (
      <p>
        {name} {exercises}
      </p>
    )
  }
  
  const Content = ({parts}) =>{
    return (
      <>
        {parts.map((part)=>
          <Part key={part.id} {...part} />)}
      </>
    )
  }
  
  const Total = ({parts}) => {  
    const total = parts.reduce((acc,curr) => acc + curr.exercises,parts[0].exercises)
    
    return (
      <b>
        total of {total} exercises
      </b>
    )
  }
  
  const Course = ({course}) =>{
    return (
      <>
        <Header course={course}/>
        <Content parts={course.parts} />
        <Total parts={course.parts}/>
      </>
    )
  
  }

  export default Course