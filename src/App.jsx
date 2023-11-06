import { useState } from 'react'

import {BaseEmployees} from './components/Employees';
import './App.css'
import Searcher from './components/Searcher';
import Form from './components/Form';

function App() {
  const [list, setList]=useState(BaseEmployees);
  const [name, setName]=useState("");
  const [role, setRole]=useState("");
  const [age, setAge]=useState("");
  const [email, setEmail]=useState("");
  const [phone, setPhone]=useState("");
  const [search, setSearch]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
  
    const newEmployee={
      id:Date.now(),
      name:name,
      email:email,
      age:age,
      role:role,
      phone:phone
    };
    setList([...list,newEmployee]);
  
  }

  const handleOnChangeName=(e)=>{
    setName(e.target.value);
    console.log(e.target.value)
   };
   
   const handleOnChangeEmail=(e)=>{
     setEmail(e.target.value);
     console.log(e.target.value)
    };

    const handleOnChangeRole=(e)=>{
      setRole(e.target.value);
      console.log(e.target.value)
     };

     const handleOnChangeAge=(e)=>{
      setAge(e.target.value);
      console.log(e.target.value)
     };
     const handleOnChangePhone=(e)=>{
      setPhone(e.target.value);
      console.log(e.target.value)
     };
   
    const handleFilter=(e)=>{
     setSearch(e.target.value)
     console.log(search)
   
    };
   
    const handleDelete=(id)=>{
     const filtered=list.filter((elem)=>  elem.id!==id )
     setList(filtered)
     console.log(filtered)
     console.log(id)
    };
   

  return (
    <>
    <div className='container'>
     
      <div className='searcherSection'>
        <Searcher onChange={handleFilter}/>
        <h2>Employees list</h2>
          <ul>
          { list.filter((elem)=> { 
            if(elem.name.toLowerCase().includes(search.toString().toLowerCase())){
              return elem
            }
            if(elem.age.toLowerCase().includes(search.toString().toLowerCase())){
              return elem
            }
            if(elem.role.toLowerCase().includes(search.toString().toLowerCase())){
              return elem
            }
            if(elem.email.toLowerCase().includes(search.toString().toLowerCase())){
              return elem
            }
            
          }).map(({id,name,email,age,role,phone})=> (<li key={id}>{name} - {email} - {age} - {phone} - {role}<button className='btn btn-danger m-1' onClick={()=>{handleDelete(id)}}>Delete</button></li>)
          )}
          </ul>
      </div>
      <div className='addEmployee'>
       
       <Form onSubmit={handleSubmit} onChangeEmail={handleOnChangeEmail} onChangeName={handleOnChangeName} onChangePhone={handleOnChangePhone} onChangeAge={handleOnChangeAge} onChangeRole={handleOnChangeRole}/>
       
     </div>
       
    </div>
       
        
    </>
  )
}

export default App
